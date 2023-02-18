import Swal, { SweetAlertPosition } from 'sweetalert2';

const successAlert = (
  title = 'Piola!',
  message = 'La acción fue exitosa',
  position: SweetAlertPosition = 'center'
) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'success',
    timer: 2000,
    position: position,
    showConfirmButton: false,
  });
};

const errorAlert = (message = 'Algo ha salido mal') => {
  Swal.fire({
    text: message,
    icon: 'error',
    timer: 2000,
    showConfirmButton: false,
  });
};

const loginAlert = () => {
  Swal.fire({
    text: 'Usuario conectado con éxito',
    icon: 'success',
    timer: 2000,
    position: 'top',
    showConfirmButton: false,
  });
};

const confirmButton = async (
  message: string = '',
  confirmMessage: string = 'Sí',
  cancelMessage: string = 'Borrar'
) => {
  return new Promise((resolve) => {
    Swal.fire({
      text: message,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: confirmMessage,
      cancelButtonText: cancelMessage,
      reverseButtons: true,
      confirmButtonColor: '#EF3F47',
    }).then((res) => {
      res.isConfirmed ? resolve(true) : resolve(false);
    });
  });
};

export { successAlert, errorAlert, loginAlert, confirmButton };
