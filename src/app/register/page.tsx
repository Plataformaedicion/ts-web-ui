import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Register() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <img
          src="/images/register-img.jpg"
          alt="Description"
          className="rounded-lg max-w-lg mx-auto shadow-lg md:max-w-md"
        />
      </div>
      <div className="flex flex-1 justify-center items-center px-8 py-12 lg:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-base font-semibold leading-7 text-gray-900">Registro de Usuarios</h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Por favor ingrese los siguientes datos
                </p>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Nombre Completo *
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Correo Electrónico *
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Contraseña *
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-6 sm:col-span-4">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <p className="text-gray-500">Acepta nuestras politicas de uso y tratamiento de datos.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
