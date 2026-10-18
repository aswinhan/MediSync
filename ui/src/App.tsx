import { PractitionerWorkspace } from './features/practitioner/Workspace';
import { ThemeProvider } from './components/theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <PractitionerWorkspace />
    </ThemeProvider>
  );
}