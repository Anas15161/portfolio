import AnimatedSection from '../ui/AnimatedSection';
import { GitHubCalendar } from 'react-github-calendar';
import { useLanguage } from '../../contexts/LanguageContext';
import { personalInfo } from '../../data/portfolioData';

const GithubStats = () => {
  const { language, t } = useLanguage();
  
  // Extraire le nom d'utilisateur du lien GitHub
  const githubUrl = personalInfo.github;
  const username = githubUrl.split('/').pop();

  return (
    <AnimatedSection id="github" className="bg-card/30 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-16 flex items-center justify-center gap-4">
          <span className="w-12 h-[2px] bg-accent2 block"></span>
          {t('github')}
          <span className="w-12 h-[2px] bg-accent2 block"></span>
        </h2>

        <div className="flex justify-center">
          <div className="glass p-8 rounded-xl border border-gray-800/50 hover:border-accent2/50 transition-colors w-full max-w-4xl overflow-x-auto">
            <div className="min-w-[800px] flex justify-center">
              <GitHubCalendar 
                username={username} 
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', 'rgba(var(--accent2-rgb), 0.3)', 'rgba(var(--accent2-rgb), 0.5)', 'rgba(var(--accent2-rgb), 0.7)', 'rgba(var(--accent2-rgb), 1)']
                }}
                labels={{
                  totalCount: language === 'fr' 
                    ? '{{count}} contributions l\'année dernière' 
                    : '{{count}} contributions in the last year'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GithubStats;
