import React from 'react';


//import { createClient } from '@supabase/supabase-js'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRepos } from './../LearnJs/AxiosGIT/main/api';
import { getID } from './apinextjs';




//const supabaseUrl = 'https://iakjucmhukqakhswuqgh.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
//const supabase = createClient(supabaseUrl, supabaseKey)


//let { data: client_comment, error } = await supabase
//	.from('client_comment')
//	.select('comment')


const Tusk = (props) => {
	//const repo = props.repo
	const dispatch = useDispatch();
	const cli = useSelector(state => state.cli.client_id)


	useEffect(() => { dispatch(getID()) }, [])

	return (
		<div>
			<div>
				{ cli.map(a => <h1>{ a }</h1>) }
				{/*{ cli.map(repo => <h1>{ repo }</h1>) }*/ }
			</div>
		</div>
	)
}

export default Tusk;