export const Alert = (type, payload) => {
  alert('Alert ');
  //   const options = {
  //     position: isMobile() ? 'top-center' : 'bottom-left',
  //   };
  //   if (!payload) return;
  //   switch (type) {
  //     case 'success':
  //       cogoToast.success(`${payload}!`, options);
  //       break;
  //     case 'error':
  //       if (typeof payload === 'object') {
  //         payload?.map((error) => {
  //           return cogoToast.error(error.msg, options);
  //         });
  //       } else {
  //         cogoToast.error(`${payload}!`, options);
  //       }
  //       break;
  //     case 'info':
  //       cogoToast.info(`${payload}!`, options);
  //       break;
  //     case 'warning':
  //       cogoToast.custom(
  //         <div
  //           style={{
  //             background: 'yellow',
  //             position: 'absolute',
  //             width: '250px',
  //             transition: 'all 0.5s ease-out',
  //           }}>
  //           {payload}
  //         </div>,
  //         options
  //       );
  //       break;
  //     default:
  //       cogoToast.info(`${payload}!`, options);
  //       break;
  //   }
};

export const handleLogout = () => {
  localStorage.removeItem('token');
};
