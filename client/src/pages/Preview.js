import React from 'react';

const Preview = ({ palette }) => {

    // console.log(palette);

    // I M CUTE

    
    const previewHeader = {
        backgroundColor: palette.primary,
    }

    const previewH2 = {
        fontWeight: 'bolder'
    }

    const previewFooter = {
        backgroundColor: palette.primary,
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    }

    const previewMain = {
        display: 'flex',
        backgroundColor: '#fff',
        padding: '.55em',
        flexDirection: 'column'
    }

    const previewCTA = {
        backgroundColor: palette.secondary,
        padding: '3em',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
    }

    const previewDiv1 = {
        backgroundColor: palette.accent1,
        padding: '1.25em',
        marginBottom: '7px',
        display: 'flex',
        justifyContent: 'center',
    }

    const previewDiv2 = {
        backgroundColor: palette.accent2,
        padding: '1.25em',
        marginBottom: '7px',
        display: 'flex',
        justifyContent: 'center',
    }

    const previewDiv3 = {
        backgroundColor: palette.accent3,
        padding: '1.25em',
        marginBottom: '7px',
        display: 'flex',
        justifyContent: 'center',
    }


    return(
        <div className='preview-wrapper'>
            <div style={previewHeader} className='preview-header'>
                <ul className='preview-ul'>
                    <li>User</li>
                    <li>Search</li>
                    <li>Logout</li>
                </ul>
            </div>
            <p>Primary: {palette.primary}</p>

            <div className='preview-body'>
                <div style={previewCTA}>
                    <p>Here is an example page.</p>
                </div>
                <div style={previewDiv1}>
                    <p>It's here to give you an idea of how your website or application might look.</p>
                </div>
                <div style={previewDiv2}>
                    <p>You can put colors wherever you like them.</p>
                </div>
                <div style={previewDiv3}>
                    <p>Just grab the HEX codes and put them on your own CSS file.</p>
                </div>
            </div>

            <div style={previewFooter}>
                <p style={previewH2}>That's all folks!</p>
                <ul className='preview-ul'>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Preview;
