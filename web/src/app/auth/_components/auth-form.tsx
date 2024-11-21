'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { signIn } from 'next-auth/react'
import { toast } from "@/hooks/use-toast"

export function AuthForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      await signIn('email', { email: email, redirect: false })
      toast({
        title: "Email enviado",
        description: "Confira sua caixa de email",
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Algo de estranho aconteceu ao tentar enviar o email',
      })
    }
  }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Digite seu email para entrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            <Button type="submit" className="w-full">
              Enviar Email
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    )        
}