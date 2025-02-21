

const Email = () => {
    return (
        <div className="join">
            <div className="max-w-2xl w-full">
                <label className="input validator join-item focus-within:outline-0 focus:outline-0 max-w-2xl w-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" className="max-w-2xl w-full" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button type="submit" className="btn btn-neutral bg-main border-0 shadow-none join-item">Subscribe</button>
        </div>
    );
};

export default Email;