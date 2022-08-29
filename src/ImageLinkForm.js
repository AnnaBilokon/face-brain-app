import React from 'react';
import './ImageLinkForm.css';

export const ImageLinkForm = () => {
return (
<div className='center'>
	<p className='f3'>
{'This Magic will detect faces in your pictures. Give it a try.'}
<div className='form center pa4 br3 shadow-5' >
	<input className='f4 pa2 w-70 center' type='text'/>
	<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
</div>
	</p>
</div>
)
}