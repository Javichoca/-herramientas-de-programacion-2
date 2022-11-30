export default function ComponenteErrorCampo(props: MostrarErrorCampo) {
    return <div className=" text-danger">{props.mensaje}</div>;
  }
  
  interface MostrarErrorCampo {
    mensaje: string;
  }