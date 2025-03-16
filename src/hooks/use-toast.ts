import { toast as sonnerToast } from 'sonner'

interface ToastOptions {
  title: string
  description?: string
}

export const useToast = () => {
  const toast = (options: ToastOptions) => {
    sonnerToast(options.title, {
      description: options.description,
      duration: 2000,
    })
  }

  return { toast }
}

