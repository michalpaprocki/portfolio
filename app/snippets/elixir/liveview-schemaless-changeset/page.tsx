import Snippet from "@/app/components/Snippet";
import Code from "@/app/components/static/Code";

import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="mx-auto py-3 text-xl">Ecto&apos;s Schemaless Changeset</h1>
      <div className="flex flex-col pb-10">
        <p className="mt-4 w-80p self-center indent-1">
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            href={"https://hexdocs.pm/ecto/Ecto.Changeset.html"}
            target="_blank"
            title="Ecto hexdocs page."
          >
            Ecto Changesets
          </Link>
          &nbsp; are used to validate and manipulate data server-side. Most of
          the work with changesets is done using schemas, nonetheless there are
          cases where we would want to validate a set of data without using one,
          e.g.: form validation. Although Ecto documentation describes how to
          implement a schemaless changeset, it doesn&apos;t explain how to use
          it with Liveview.
        </p>
        <p className="mb-8 mt-4 w-80p self-center indent-1">
          To start off we&apos;ll need a data source. In our app&apos;s{" "}
          <Code text="lib/app_web/live" />
          &nbsp; directory create our liveview file, let&apos;s call it{" "}
          <Code text="nickname_live.ex" />, and implement mount and render
          callbacks of the liveview behaviour:
        </p>
        <Snippet
          language="elixir"
          code={`
        defmodule AppWeb.NicknameLive do  
         use AppWeb, :live_view
        
          def mount(_params, _session, socket) do
            {:ok, assign(socket, form: to_form(%{}))}
          end

          def render(assigns) do
          ~H"""
          <.simple_form for={@form} phx-change="validate" phx-submit="save" class="flex flex-col items-center">
          <h1>Please provide your nickname :</h1>
            <.input field={@form[:nickname]} label="nickname" />
            <:actions>
              <.button>Create</.button>
            </:actions>
          </.simple_form>
          """
        end
        `}
        />
        <p className="mb-8 mt-4 w-80p self-center indent-1">
          So what&apos;s going on here? In <Code text="mount" /> we add{" "}
          <Code text="form" />
          (it has to be the same as form&apos;s id in html) variable to the
          socket, it will hold whatever data we send from our form.&nbsp;
          <Code text="to_form" /> function transforms a map or Ecto changeset to
          a form component. The render function is responsible for generating
          our html.heex template. Let&apos;s now implement some logic:
        </p>

        <Snippet
          language="elixir"
          code={`
        def handle_event("validate", params, socket) do
          types = %{nickname: :string}
  
          changeset =
            {%{}, types}
            |> Ecto.Changeset.cast(params, Map.keys(types))
            |> Ecto.Changeset.validate_required(:nickname)
            |> Ecto.Changeset.validate_length(:nickname, min: 3)
            |> Map.put(:action, :validate)
  
          {:noreply, assign(socket, form: to_form(changeset))}
        end
        `}
        />
        <p className="mt-4 w-80p self-center indent-1">
          Above code receives params and simply performs Ecto validation and
          returns all errors generated, finally we update the{" "}
          <Code text="form" /> variable. Now when we run the server and try to
          type in the <Code text="Nickname" /> field... we will get an error.{" "}
        </p>
        <pre className="my-8 w-[80%] self-center whitespace-pre-wrap bg-black p-4 text-light-color">
          ** (ArgumentError) cannot generate name for changeset where the data
          is not backed by a struct. You must either pass the :as option to
          form/form_for or use a struct-based changeset
        </pre>
        <p className="mt-4 w-80p self-center indent-1">
          As it turns out, <Code text="to_form" /> function computes a name to
          nest the params based on schema name that is being used. As we
          don&apos;t use a schema we&apos;ll have to pass&nbsp;
          <Code text="as:" /> parameter that will serve as aforementioned name.
          It basically creates a map that we can pattern match against. Our{" "}
          <Code text="mount" /> and <Code text="handle_event" /> functions will
          now look like this:
        </p>
        <Snippet
          language="elixir"
          code={`
          def mount(_params, _session, socket) do
          {:ok, assign(socket, form: to_form(%{}, as: :nickname))}
        end

 
        def handle_event("validate", %{"nickname"=> params}, socket) do
          types = %{nickname: :string}
  
          changeset =
            {%{}, types}
            |> Ecto.Changeset.cast(params, Map.keys(types))
            |> Ecto.Changeset.validate_required(:nickname)
            |> Ecto.Changeset.validate_length(:nickname, min: 3)
            |> Map.put(:action, :validate)
  
          {:noreply, assign(socket, form: to_form(changeset, as: :nickname))}
        end
      
        `}
        />
        <p className="mt-4 w-80p self-center indent-1">
          Et voilà, now the compiler doens&apos;t complain anymore, and we can
          see errors when typing in the <Code text="Nickname" /> field.
        </p>
      </div>
    </div>
  );
};

export default page;
