import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-wrap lg:px-0 px-3 gap-9 justify-content-center items-center mt-10' >


            <div class="block mx-auto  p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    authentication and authorization</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    <strong className='text-center block mx-auto'> authentication  </strong>
                    <p> authentication means who you are , what your identity , tell me who are you , <br />
                        authentication is a process to define a real owner . <br />
                        sometimes it takes unique username to define a person . <br />
                        sometimes it providing username and password for each and every request  <br />


                    </p>

                    <strong className='text-center block mx-auto mt-1'> authorization  </strong>
                    <p> authentication means what kinds of rights do you have . <br />
                        Authorization Will tell to the system  what resources a user can access. <br />

                        it's isn’t changeable by the user.  <br />
                        it's depends on user's identity.


                    </p>
                </p>
            </div>



            <div class="block mx-auto  p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Why are we using firebase</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    first of all we're using firebase for authentication and sometimes for Hosting our site . <br />
                </p>
                <strong className='text-center block mx-auto mt-1'>Alternatives to Firebase  </strong>
                <p>
                    we can use for authentication lots more way . <br />
                    like <span className='text-2xl' >&#128419;</span>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Okta</li>

                </p>
            </div>

            <div class="block mx-auto  p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">

                    what other services done firebase provide
                </h5>

                firebase have more features . <br />
                just like <strong>  Analytics </strong> <br />
                It's has capacity to report 500 event types and it's free.<br />
                it's looking at user behavior , it will helps owner understand how people using the app . <br />

                <strong>Key features: </strong> <br />
                <li>Unlimited Reporting</li>
                <span className='inline-block' ><li >Audience Segmentation</li></span> etc.<br />

                we can use firebase for building apps and hosting it ,<br />
                we can track properly the user's experience by some way . 

            </div>


        </div>
    );
};

export default Blogs;



/* 
<div class="block mx-auto  p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">

    what other services done firebase provide
</h5>

firebase have more features . <br />
just like <strong>  Analytics </strong> <br />
It's has capacity to report 500 event types and it's free.<br />
it's looking at user behavior , it will helps owner understand how people using the app . <br />

<strong>Key features: </strong> <br />
<li>Unlimited Reporting</li>
<span className='inline-block' ><li >Audience Segmentation</li></span> etc.<br />

we can use firebase for building apps and hosting it ,<br />
we can track properly the user's experience by some way . 

</div> */