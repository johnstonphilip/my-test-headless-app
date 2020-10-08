import { useState } from 'react';
import ReactPlayer from 'react-player'
import Confetti from 'react-confetti'
import { parse } from '@wordpress/block-serialization-default-parser';

export async function getServerSideProps() {

  return fetch('https://philjohnston.wpengine.com/wp-json/wp/v2/posts/135')
  .then(response => response.json())
  .then( (data) => {
    return {
      props: data
    }
  });

}

function Home (props) {
    
    const [blocks, setBlocks] = useState( parse( props.content_raw ) );
    const [renderConfetti, setRenderConfetti] = useState( false );
    

    console.log( blocks );
    
    const output = [];
    for( var block in blocks ) {
      if ( ! blocks[block].blockName ) {
        continue;
      }
      
      // If the block is a YouTube Block
      if ( blocks[block].blockName === 'core-embed/youtube' ) {
        output.push(<ReactPlayer key={block} url={blocks[block].attrs.url} controls={true} onPlay={doCoolThing} onPause={stopCoolThing} />);
      }
      
      // If the block is a Vimeo Block
      else if ( blocks[block].blockName === 'core-embed/vimeo' ) {
        output.push(<ReactPlayer key={block} url={blocks[block].attrs.url} controls={true} onPlay={doCoolThing} onPause={stopCoolThing} />);
      }

      // If the block is a HTML block containing an MP3 link
      else if ( blocks[block].blockName === 'core/html' ) {
        output.push(<ReactPlayer key={block} url={blocks[block].innerHTML} controls={true} onPlay={doCoolThing} onPause={stopCoolThing} />);
      }
      // For all other blocks, use the pre-rendered HTML
      else {
        output.push( <div key={block} dangerouslySetInnerHTML={{ __html: blocks[block].innerHTML }} />);
      }
      
    }
    
    function doCoolThing() {
      setRenderConfetti( true );
    }
    
    function stopCoolThing() {
      setRenderConfetti( false );
    }
    
    function maybeRenderConfetti() {
      if ( renderConfetti ) {
        return(
          <div style={
            {
              position:'fixed',
              top: '0px',
              left: '0px'
            }
          }>
          <Confetti
            width={5000}
            height={1000}
          />
          </div>
        )
      }
    }
    
    return (
      <>
        { output }
        { maybeRenderConfetti() }
      </>
    )
}
export default Home;