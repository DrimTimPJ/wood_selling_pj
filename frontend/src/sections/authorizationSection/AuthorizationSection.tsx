import LoginForm from '@/forms/loginForm/loginForm'

export default function AuthorizationSection() {
  return (
    <div className="bg-[#222021]">
      <h2 className="pt-20 text-[48px] text-center">Login</h2>
      <div className="pt-10 pb-40">
        <LoginForm />
      </div>
    </div>
  )
}
