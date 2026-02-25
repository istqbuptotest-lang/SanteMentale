"use client";

import { useState } from "react";

type QuestionnaireId =
  | "phq9"
  | "gad7"
  | "pcl5Short"
  | "miniToc"
  | "personalityScreen"
  | "eatingScreen"
  | "neurodevScreen";

type Question = {
  id: string;
  questionnaire: QuestionnaireId;
  text: string;
  choices: readonly string[];
};

const scale03 = [
  "Jamais (0 jour)",
  "Rarement (1 à 2 jours)",
  "Souvent (3 à 4 jours)",
  "Très souvent (5 à 7 jours)",
] as const;

const scale04 = [
  "Pas du tout (0)",
  "Un peu (1)",
  "Assez souvent (2)",
  "Très souvent (3)",
  "Tout le temps (4)",
] as const;

const questions: readonly Question[] = [
  {
    id: "phq9_1",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu eu moins d'envie ou de plaisir à faire tes activités ?",
    choices: scale03,
  },
  {
    id: "phq9_2",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, t'es-tu senti(e) triste, découragé(e) ou sans espoir ?",
    choices: scale03,
  },
  {
    id: "phq9_3",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu eu des problèmes de sommeil (difficulté à t'endormir, réveils, ou trop dormir) ?",
    choices: scale03,
  },
  {
    id: "phq9_4",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, t'es-tu senti(e) fatigué(e) ou sans énergie ?",
    choices: scale03,
  },
  {
    id: "phq9_5",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu remarqué que ton appétit avait beaucoup changé (moins faim ou plus faim) ?",
    choices: scale03,
  },
  {
    id: "phq9_6",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, t'es-tu senti(e) nul(le), en échec ou trop coupable ?",
    choices: scale03,
  },
  {
    id: "phq9_7",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu eu du mal à te concentrer (en cours, en lisant ou pour les devoirs) ?",
    choices: scale03,
  },
  {
    id: "phq9_8",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu été beaucoup plus lent(e) que d'habitude, ou au contraire très agité(e) ?",
    choices: scale03,
  },
  {
    id: "phq9_9",
    questionnaire: "phq9",
    text: "Ces 7 derniers jours, as-tu eu des pensées de mort ou l'idée de te faire du mal ?",
    choices: scale03,
  },

  {
    id: "gad7_1",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, t'es-tu senti(e) nerveux(se), anxieux(se) ou à bout ?",
    choices: scale03,
  },
  {
    id: "gad7_2",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, as-tu eu du mal à arrêter de t'inquiéter ?",
    choices: scale03,
  },
  {
    id: "gad7_3",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, t'es-tu trop inquiété(e) pour plusieurs choses à la fois ?",
    choices: scale03,
  },
  {
    id: "gad7_4",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, as-tu eu du mal à te détendre ?",
    choices: scale03,
  },
  {
    id: "gad7_5",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, t'es-tu senti(e) tellement agité(e) qu'il était difficile de rester en place ?",
    choices: scale03,
  },
  {
    id: "gad7_6",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, as-tu été facilement irritable ou énervé(e) ?",
    choices: scale03,
  },
  {
    id: "gad7_7",
    questionnaire: "gad7",
    text: "Ces 7 derniers jours, as-tu eu peur que quelque chose de grave arrive ?",
    choices: scale03,
  },

  {
    id: "pcl5s_2",
    questionnaire: "pcl5Short",
    text: "Ces 7 derniers jours, as-tu fait des cauchemars liés à un événement très stressant ou traumatique que tu as vécu (ou vu) ?",
    choices: scale04,
  },
  {
    id: "pcl5s_4",
    questionnaire: "pcl5Short",
    text: "Ces 7 derniers jours, à quel point t'es-tu senti(e) bouleversé(e) quand quelque chose te rappelait cet événement ?",
    choices: scale04,
  },
  {
    id: "pcl5s_13",
    questionnaire: "pcl5Short",
    text: "Ces 7 derniers jours, à quel point t'es-tu senti(e) distant(e) ou coupé(e) des autres ?",
    choices: scale04,
  },
  {
    id: "pcl5s_15",
    questionnaire: "pcl5Short",
    text: "Ces 7 derniers jours, à quel point as-tu eu des problèmes de sommeil depuis cet événement (endormissement, réveils, cauchemars) ?",
    choices: scale04,
  },

  {
    id: "mini_toc_1",
    questionnaire: "miniToc",
    text: "Ces 7 derniers jours, à quel point as-tu eu des pensées qui reviennent sans arrêt et difficiles à chasser ?",
    choices: scale04,
  },
  {
    id: "mini_toc_2",
    questionnaire: "miniToc",
    text: "Ces 7 derniers jours, à quel point as-tu ressenti le besoin de vérifier plusieurs fois les mêmes choses (porte, devoirs, objets) ?",
    choices: scale04,
  },
  {
    id: "mini_toc_3",
    questionnaire: "miniToc",
    text: "Ces 7 derniers jours, à quel point as-tu ressenti le besoin de laver ou nettoyer encore et encore ?",
    choices: scale04,
  },
  {
    id: "mini_toc_4",
    questionnaire: "miniToc",
    text: "Ces 7 derniers jours, à quel point ton besoin d'ordre ou de symétrie t'a-t-il posé problème ?",
    choices: scale04,
  },

  {
    id: "pers_1",
    questionnaire: "personalityScreen",
    text: "Ces 7 derniers jours, t'est-il arrivé de beaucoup te méfier des autres sans preuve claire ?",
    choices: scale03,
  },
  {
    id: "pers_2",
    questionnaire: "personalityScreen",
    text: "Ces 7 derniers jours, as-tu eu des émotions très fortes et difficiles à calmer ?",
    choices: scale03,
  },
  {
    id: "pers_3",
    questionnaire: "personalityScreen",
    text: "Ces 7 derniers jours, as-tu eu du mal à garder des relations stables avec les autres ?",
    choices: scale03,
  },
  {
    id: "pers_4",
    questionnaire: "personalityScreen",
    text: "Ces 7 derniers jours, la peur d'être rejeté(e) ou abandonné(e) a-t-elle beaucoup influencé tes réactions ?",
    choices: scale03,
  },

  {
    id: "eat_1",
    questionnaire: "eatingScreen",
    text: "Ces 7 derniers jours, as-tu beaucoup pensé à ton poids, ta silhouette ou ton apparence ?",
    choices: scale03,
  },
  {
    id: "eat_2",
    questionnaire: "eatingScreen",
    text: "Ces 7 derniers jours, as-tu beaucoup limité ce que tu manges, ou compensé après avoir mangé (jeûne, sport excessif, vomissements provoqués) ?",
    choices: scale03,
  },
  {
    id: "eat_3",
    questionnaire: "eatingScreen",
    text: "Ces 7 derniers jours, t'est-il arrivé de manger beaucoup d'un coup avec la sensation de perdre le contrôle ?",
    choices: scale03,
  },
  {
    id: "eat_4",
    questionnaire: "eatingScreen",
    text: "Ces 7 derniers jours, as-tu ressenti de la honte, de la culpabilité ou de l'angoisse après avoir mangé ?",
    choices: scale03,
  },

  {
    id: "neuro_1",
    questionnaire: "neurodevScreen",
    text: "Ces 7 derniers jours, as-tu eu du mal à rester attentif(ve) (écouter, suivre une consigne, finir une tâche) ?",
    choices: scale03,
  },
  {
    id: "neuro_2",
    questionnaire: "neurodevScreen",
    text: "Ces 7 derniers jours, t'es-tu senti(e) souvent agité(e), impulsif(ve) ou avec du mal à rester calme ?",
    choices: scale03,
  },
  {
    id: "neuro_3",
    questionnaire: "neurodevScreen",
    text: "Ces 7 derniers jours, as-tu trouvé difficile de comprendre certains codes sociaux (regard, tour de parole, sous-entendus) ?",
    choices: scale03,
  },
  {
    id: "neuro_4",
    questionnaire: "neurodevScreen",
    text: "Ces 7 derniers jours, as-tu eu des mouvements ou des sons répétitifs difficiles à contrôler ?",
    choices: scale03,
  },
];

const totalByQuestionnaire: Record<QuestionnaireId, number> = {
  phq9: 9,
  gad7: 7,
  pcl5Short: 4,
  miniToc: 4,
  personalityScreen: 4,
  eatingScreen: 4,
  neurodevScreen: 4,
};

type AnswersMap = Record<string, number>;

type BilanPayload = {
  phq9: number[];
  gad7: number[];
  pcl5Short: number[];
  miniToc: number[];
  personalityScreen: number[];
  eatingScreen: number[];
  neurodevScreen: number[];
};

function buildPayload(answers: AnswersMap): BilanPayload {
  const grouped: BilanPayload = {
    phq9: [],
    gad7: [],
    pcl5Short: [],
    miniToc: [],
    personalityScreen: [],
    eatingScreen: [],
    neurodevScreen: [],
  };

  for (const question of questions) {
    const value = answers[question.id];
    if (typeof value !== "number") {
      throw new Error(`Réponse manquante pour ${question.id}`);
    }
    grouped[question.questionnaire].push(value);
  }

  for (const [questionnaire, expected] of Object.entries(totalByQuestionnaire)) {
    const current = grouped[questionnaire as QuestionnaireId].length;
    if (current !== expected) {
      throw new Error(`Longueur invalide pour ${questionnaire}: ${current}/${expected}`);
    }
  }

  return grouped;
}

export default function BilanGlobal() {
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const currentQuestion = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const nextAnswers: AnswersMap = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      return;
    }

    try {
      const payload = buildPayload(nextAnswers);
      sessionStorage.removeItem("bilanApiResult");
      sessionStorage.setItem("bilanPayload", JSON.stringify(payload));
      window.location.assign("/profil-resultat");
    } catch (submissionError) {
      console.error("Erreur de création du payload bilan:", submissionError);
    }
  };

  if (!hasStarted) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Avant de commencer le bilan</h1>
          <p className="text-gray-700 leading-7 text-justify">
            Ce bilan est un outil éducatif d'orientation, construit à partir de questionnaires de
            dépistage reconnus en santé mentale (PHQ-9, GAD-7, PCL-5 court, mini-TOC et modules
            complémentaires). Il ne pose pas de diagnostic médical et ne remplace pas l'évaluation d'un
            professionnel de santé. Les questions couvrent les principales catégories du site:
            anxieux, humeur, traumatisme/stress, personnalité, conduites alimentaires et
            neurodéveloppement.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 space-y-3">
          <p className="font-semibold">Consignes de réponse</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pour les questions de fréquence: réponds en nombre de jours sur les 7 derniers jours.</li>
            <li>Pour les questions d'intensité: choisis le niveau qui correspond le mieux à ton ressenti.</li>
            <li>Réponds de manière honnête; il n'y a pas de bonne ou de mauvaise réponse.</li>
          </ul>
          <p className="text-justify">
            Pourquoi ces consignes ? L'échelle en jours (0, 1-2, 3-4, 5-7) réduit l'ambiguïté et rend
            les réponses comparables entre les participants. La période courte des 7 derniers jours aide
            aussi à mieux se souvenir de ses symptômes récents.
          </p>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-900 space-y-1">
          <p className="font-semibold">Avertissements importants</p>
          <p className="text-justify">
            Si tu te sens en danger immédiat, contacte sans attendre les services d'urgence de ton pays.
            Parle aussi rapidement à un adulte de confiance ou à un professionnel de santé.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setHasStarted(true)}
            className="px-5 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Commencer le bilan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="mb-4 h-2 bg-gray-200 rounded">
        <div className="h-2 bg-blue-600 rounded" style={{ width: `${progress}%` }} />
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Question {current + 1} / {questions.length}
      </p>

      <h2 className="text-xl font-semibold mb-6">{currentQuestion.text}</h2>

      <div className="grid gap-3">
        {currentQuestion.choices.map((label, value) => (
          <button
            key={label}
            onClick={() => handleAnswer(value)}
            className="p-3 border rounded hover:bg-blue-50"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
