import './About.css'

export default function About() {

    function displayJson(): void {
        var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
        var url: string = "https://jsonplaceholder.typicode.com/posts";
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText)
                const divObj: HTMLElement=document.getElementById('json-caption') as HTMLElement
                divObj.innerHTML = this.responseText
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

        return (
            <div className="App">
            <header className="App-header">
            <button className='btn btn-info' onClick={displayJson}>
                display json from url
            </button>
            <div id='json-caption'>

            </div>
              <p>hello to my-react :)</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )
    }

