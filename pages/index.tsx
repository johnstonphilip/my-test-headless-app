import { JSXElementConstructor, useState, Fragment} from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player'
import Confetti from 'react-confetti'
import { parse } from '@wordpress/block-serialization-default-parser';

export async function getServerSideProps() {

  const wp_head = await fetch('https://philjohnston.wpengine.com/wp-json/atlas/v1/wp_head')
  .then(response => response.json())
  .then( (data) => {
    return data
  });
  
  const post_content = await fetch('https://philjohnston.wpengine.com/wp-json/wp/v2/posts/135')
  .then(response => response.json())
  .then( (data) => {
    return data
  });
  
  const wp_footer = await fetch('https://philjohnston.wpengine.com/wp-json/atlas/v1/wp_footer')
  .then(response => response.json())
  .then( (data) => {
    return data
  });
  
  
  return {
    props: {
      wp_head: wp_head,
      post_content: post_content,
      wp_footer: wp_footer
    }
  }

}

function Home (props) {
    
    console.log( props );
  
    const [blocks, setBlocks] = useState( parse( props.post_content.content_raw ) );
    const [renderConfetti, setRenderConfetti] = useState( false );
        
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
  
    function render_wp_head() {
      const headElements = [];
      
      for( var element in props.wp_head.scripts ) {
        headElements.push( <script key={element} src={props.wp_head.scripts[element]}/> );
      }
      
      for( var element in props.wp_head.styles ) {
        headElements.push( <link key={element} rel="stylesheet" href={props.wp_head.styles[element]}/> );
      }
      
      return headElements;
    }
  
    return (
      <>
        <Head>
        { render_wp_head() }
        </Head>
       
          { output }
          { maybeRenderConfetti() }
       
        <footer dangerouslySetInnerHTML={{ __html: props.wp_footer  }} />

      </>
    )
}
export default Home;