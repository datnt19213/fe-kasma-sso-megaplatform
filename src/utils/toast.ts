type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  duration?: number;
}

export const toast = {
  success: (message: string, duration?: number) => triggerToast(message, 'success', duration),
  error: (message: string, duration?: number) => triggerToast(message, 'error', duration),
  info: (message: string, duration?: number) => triggerToast(message, 'info', duration),
};

function triggerToast(message: string, type: ToastType, duration = 3500) {
  const event = new CustomEvent('astro-toast', {
    detail: { message, type, duration }
  });
  window.dispatchEvent(event);
}
