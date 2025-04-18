"use client"

import { useEffect, useState } from "react"

const TOAST_REMOVE_DELAY = 1000

const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, action, ...props }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = {
      id,
      title,
      description,
      action,
      ...props,
    }
    setToasts((prevToasts) => [...prevToasts, newToast])
    return id
  }

  const dismiss = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
  }

  const update = (toastId, data) => {
    setToasts((prevToasts) => prevToasts.map((toast) => (toast.id === toastId ? { ...toast, ...data } : toast)))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1))
    }, TOAST_REMOVE_DELAY)

    return () => clearTimeout(timer)
  }, [toasts])

  return {
    toast,
    dismiss,
    update,
    toasts,
  }
}

export { useToast }
