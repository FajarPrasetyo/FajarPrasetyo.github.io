import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10 pt-16" id="contact">
            <div className="container">
                <p className="text-lg text-muted-foreground">Have a project or collaboration in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-2xl sm:text-4xl md:text-5xl font-anton inline-block mt-4 mb-10 text-primary hover:underline tracking-wide"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()}{' '}
                        <a
                            href={GENERAL_INFO.githubProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors font-medium"
                        >
                            {GENERAL_INFO.name}
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
