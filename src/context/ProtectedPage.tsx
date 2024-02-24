import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React from "react";


export const ProtectedPage = ({
    children, roles
}: { children: React.ReactNode, roles: number[] }) => {
    const navegate = useNavigate()

    const roleCode = useSelector((state: any) => state.auth.roleCode)

    // erificar a rota do individo 
    // caso não for permitida lhe redirecionar para devida rota
    // caso não estiver logado lhe botar pra fora 

    React.useEffect(() => {
        if (!roles.includes(roleCode))
            navegate('/')
    }, [])
    
    return (
        <>
            {children}
        </>
    )
}