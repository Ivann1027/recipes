import { useState, useContext, useRef, useEffect, ReactNode } from 'react'
import '../../css/authorized.css'
import { FaRegUser } from "react-icons/fa"
import { MdLogout } from "react-icons/md"
import { CustomContext } from '../../context/Context'
import { IContextValue } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const Authorized = () => {

	const [isActive, setIsActive] = useState<boolean>(false)
	const { user, setUser, emptyUser } = useContext(CustomContext) as IContextValue
	const navigate = useNavigate()
	const menuRef = useRef<HTMLDivElement>(null)
	const openRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const closeMenu = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node) && openRef.current && !openRef.current.contains(e.target as Node)) {
				setIsActive(false)
			}
		}
		document.addEventListener('click', closeMenu)
		return () => {
			document.removeEventListener('click', closeMenu)
		}
	}, [])

	const logout = () => {
		localStorage.setItem('currentUser', JSON.stringify(emptyUser))
		setUser(emptyUser)
		navigate('/')
	}

	return (
		<section ref={openRef} onClick={() => setIsActive(!isActive)} className="authorized">
			{user.user.userName}
			<div ref={menuRef} style={{display: isActive ? 'block' : 'none'}} className='authorized__menu'>
				<p onClick={() => navigate('/account')} className='menu__item'><span>Личный кабинет</span> <FaRegUser /></p>
				<p onClick={logout} className='menu__item'><span>Выйти</span> <MdLogout /></p>
			</div>
		</section>
	)
}

export default Authorized