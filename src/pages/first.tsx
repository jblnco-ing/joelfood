export default function First() {
  return (
    <div className="flex flex-col gap-4 ml-4 mt-5">
      <section>
        <h1 className="text-3xl font-bold underline">Colores y Dimensiones</h1>
        <div className="m-5">
          <button className="bg-red-500 text-red-200 max-sm:w-full w-52 h-10 ">
            submit
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold underline">Display y Flexbox</h1>
        <div className="m-5 flex flex-wrap gap-4">
          <button className="bg-red-500 text-red-200 max-sm:w-full w-52 h-10 ">
            submit
          </button>
          <button className="bg-red-500 text-red-200 max-sm:w-full w-52 h-10 ">
            submit
          </button>
          <button className="bg-red-500 text-red-200 max-sm:w-full w-52 h-10 ">
            submit
          </button>
          <button className="bg-red-500 text-red-200 max-sm:w-full w-52 h-10 ">
            submit
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold underline">Pseudo—Class Variants</h1>
        <div className="m-5 flex flex-wrap gap-4 text-red-200">
          <button className="bg-red-500  active:text-red-500 active:bg-red-200 max-sm:w-full w-52 h-10 first:text-blue-500 last:text-green-500 ">
            ACTIVE
          </button>
          <button className="bg-red-500 hover:text-red-500 hover:bg-red-200 max-sm:w-full w-52 h-10 first:text-blue-500 last:text-green-500 ">
            HOVER
          </button>
          <button className="bg-red-500 hover:text-red-500 hover:bg-red-200 max-sm:w-full w-52 h-10 first:text-blue-500 last:text-green-500 ">
            HOVER
          </button>
          <button className="bg-red-500 hover:text-red-500 hover:bg-red-200 max-sm:w-full w-52 h-10 first:text-blue-500 last:text-green-500 ">
            HOVER
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold underline">
          Extraer componentes usando @apply
        </h1>
        <div className="m-5 flex flex-wrap gap-4">
          <div className="alert">Este mensaje es una alerta default.</div>
          <div className="alert alert-danger">Este mensaje es una alerta danger.</div>
          <div className="alert alert-warning">Este mensaje es una alerta warning.</div>
          <div className="alert alert-info">Este mensaje es una alerta info.</div>
        </div>
      </section>
    </div>
  );
}
