import { redirect } from "next/navigation";
import { login } from "../../utils/auth";

export default function Login() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row">
      <div className="flex flex-1 justify-center items-center px-8 py-12 lg:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/images/bear_2.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bienvenido
          </h2>
          <p className="mt-2 text-center text-sm leading-6 text-gray-400 max-w">
            Por favor ingrese sus credenciales para continuar
          </p>
          <form 
          action={async (formData) => {
            "use server";
            await login(formData);
            redirect("/dashboard");
          }} className="space-y-6 mt-10">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico *
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña *
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-5 text-center text-sm">
                <a href="#" className="text-amber-600 hover:text-amber-500">
                  Olvido su contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Inicia Sesión
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-4 mb-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500">o</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <div className="mt-6 text-center text-sm">
            <a href="/register">
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >

                Crea una cuenta

              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-center items-center">
        <img
          src="/images/login-img.jpg"
          alt="Description"
          className="rounded-lg max-w-lg mx-auto shadow-lg md:max-w-md"
        />
      </div>

    </div>
  );
}
