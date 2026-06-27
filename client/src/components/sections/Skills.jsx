import AnimatedSection from '../ui/AnimatedSection';
import SkillBar from '../ui/SkillBar';
import { skillsData, languagesData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';

const Skills = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection id="skills" className="bg-card/30 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-16 flex items-center justify-center gap-4">
          <span className="w-12 h-[2px] bg-accent1 block"></span>
          {t('skills')}
          <span className="w-12 h-[2px] bg-accent1 block"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="glass p-6 rounded-xl border border-gray-800/50 hover:border-accent1/50 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent1/10 text-accent1 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.category[language] || category.category}</h3>
                </div>
                <div>
                  {category.skills.map((skill, i) => (
                    <SkillBar key={i} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Section Langues */}
          <div className="glass p-6 rounded-xl border border-gray-800/50 hover:border-accent2/50 transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-accent2/10 text-accent2 rounded-lg">
                  <span className="font-bold text-lg leading-none">A</span>
               </div>
               <h3 className="text-xl font-bold">{language === 'fr' ? 'Langues' : 'Languages'}</h3>
            </div>
            <div>
              {languagesData.map((lang, i) => (
                <SkillBar key={i} name={lang.name[language] || lang.name} level={lang.level} color={lang.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
