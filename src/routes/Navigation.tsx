import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Simulate } from '../pages/Simulate'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Simulate />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
