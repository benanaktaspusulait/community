import { useNavigate } from 'react-router-dom'
import { Clock3, ShieldCheck } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { TopBar } from '../components/ui/TopBar'

export function JoinPending() {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col bg-[#fffaf2]">
      <TopBar title="Join request" back />

      <div className="flex flex-1 flex-col justify-between px-5 pb-7 pt-8 text-center">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-brand-50 text-brand-700 ring-1 ring-brand-100">
            <Clock3 size={34} />
          </div>
          <h1 className="mt-6 text-3xl font-black leading-[0.95] tracking-[-0.06em] text-ink">
            Your request is waiting for admin approval.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted">
            Private groups keep quality high. You can still preview public resources while the admin reviews your request.
          </p>

          <Card className="mt-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck size={19} className="mt-0.5 text-brand-700" />
              <div>
                <p className="text-sm font-black tracking-[-0.02em] text-ink">What happens next?</p>
                <p className="mt-1 text-xs leading-5 text-muted">
                  You will get a notification when the request is approved or rejected. Rejected requests should include a reason.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <Button className="w-full py-3.5" onClick={() => navigate('/preview')}>
            View public preview
          </Button>
          <Button variant="secondary" className="w-full py-3.5" onClick={() => navigate('/')}>
            Cancel request
          </Button>
        </div>
      </div>
    </div>
  )
}
