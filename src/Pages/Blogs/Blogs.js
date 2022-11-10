import useTitle from "../../Hook/useTitle";

export const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className=" px-4 py-16 text-gray-400 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-start text-5xl font-extrabold leading-none">
                        Build a Business Foundation for
                        Good Initial Planning
                    </h5>

                </div>
                <div className="">
                    <div className="max-w-md my-5 text-start" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="500">
                        <h6 className="mb-2 font-semibold leading-5 text-2xl">Diffrent betweene SQL any NoSQl</h6>
                        <p className=" text-gray-500 text-md">

                            <span className="text-gray-400 text-xl">SQL : </span> <br />
                            SQL stands for ‘Structured Query Language’. These types of databases are non-tabular.it is the used for executing queries, and handling data by using CRUD (create, read, update and delete) operation on a Relational Database Management System like MySQL, PostgreSQL, etc.
                            <br />
                            <br />
                            <span className="text-gray-400 text-xl">NoSQL: </span> <br />
                            NoSQL stands for ‘Not-Only SQL’. These types of databases are non-tabular. A No-SQL database does not require a specific schema and hence is schema-less, and all the entries/documents are JSON documents. Examples − MongoDB, DynamoDB, etc.NoSQL databases are very flexible, easy to use, developer-friendly, and provide higher performance.

                        </p>
                    </div>
                    <div className="max-w-md text-start my-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h6 className="mb-2 font-semibold leading-5 text-2xl">What is jwt? How dose it works</h6>
                        <p className=" text-gray-500 text-md">

                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.JSON is a data text format, In the case of authentication a token is a string of data that represents something else, such as an identity.
                            <br />
                            JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        </p>
                    </div>
                    <div className="max-w-md text-start my-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="500">
                        <h6 className="mb-2 font-semibold leading-5 text-2xl">Diffrent between NOde js and JavaScript</h6>
                        <p className=" text-gray-500 text-md">

                            <span className="text-gray-400 text-xl">Node js: </span> <br />

                            Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser.
                            It is used for server-side programming,
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code.
                            <br />
                            <br />
                            <span className="text-gray-400 text-xl">JavaScript :</span> <br />
                            JavaScript is a programming language originally designed to add interactivity to web pages and create web applications.JavaScript is a high-level, dynamic and interpreted language.Node js help's to run javascript in ta browser.

                        </p>
                    </div>
                    <div className="max-w-md text-start my-5" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h6 className="mb-2 font-semibold leading-5 text-2xl">How dose Node js handle multiple request?</h6>
                        <p className="text-gray-500 text-md">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built an eventloop.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. When the synchronize call's are complete then it takes commend form Queue and executes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};