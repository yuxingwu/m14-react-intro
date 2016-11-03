// Main.jsx file

// Create a simple component
    // In your render function...
            // Return div with two paragraphs
            var MyComponent = React.createClass({
                render:function(){
                    return(
                        <div>
                            <p>Hello, my name is {this.props.name}</p>
                            <p>I am interested in {this.props.interest}</p>
                        </div>
                    );
                }
            });
// Render your component in the `main` section
ReactDOM.render(<MyComponent name="Yuxing" interest="playing piano"/>,
    document.querySelector('main')
);
