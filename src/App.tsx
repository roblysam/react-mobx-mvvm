import React from "react";
import * as sect1 from "./examples/1-FunctionComponents/components";
import * as sect2 from "./examples/2-ViewModels/components";
import "./App.css";

export const App: React.FC = () => (
    <div>
        <h1>Function Components</h1>
        <div>
            <h2>1.1 A simple component</h2>
            <div>
                <sect1.Button_1_1 />
            </div>
            <h2>1.2 Passing Props</h2>
            <div>
                <sect1.Button_1_2 id="button_1_2" text="Hello" />
            </div>
            <h2>1.3 Arrow Function Components</h2>
            <div>
                <sect1.Button_1_3a id="button_1_3" text="Hello Arrow" />
            </div>
            <div>
                <sect1.Button_1_3b id="button_1_3" text="Hello Arrow" />
            </div>
            <div>
                <sect1.Button_1_4a
                    id="button_1_4"
                    style={{
                        backgroundColor: "yellow",
                        border: "1px solid black",
                        borderRadius: 5
                    }}
                    className="app-button offsetted"
                >
                    <div>Hello</div>
                    <div>World</div>
                </sect1.Button_1_4a>
            </div>
        </div>
        <h2>View Models</h2>
        <div>
            <h2>2.1 Handling onClick using a view model</h2>
            <div>
                <sect2.Button_2_1>Click Me</sect2.Button_2_1>
            </div>
            <h2>2.2 Observing state changes</h2>
            <div>
                <sect2.Button_2_2>Click Me</sect2.Button_2_2>
            </div>
        </div>
    </div>
);
