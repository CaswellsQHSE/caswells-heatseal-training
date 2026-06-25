export const MODULE_TITLE = 'Heat Seal Press Operator Training';
export const MODULE_REF = 'OP-13 | CoP 4.4.3 | CAS21 REV 3';
export const SITE = 'Billingham — D.R. Caswell Ltd';
export const VERSION = 'v2026.1';

export const SECTIONS = [
  {
    id: 'intro',
    title: 'Introduction & Scope',
    icon: '📋',
    content: [
      {
        type: 'text',
        body: 'This training module covers the safe operation of heat seal press equipment at the Billingham site. It applies to all authorised operators of:'
      },
      {
        type: 'list',
        items: [
          '7× Siser TS-ONE swing-arm heat presses',
          '1× Stahls\' Hotronix Fusion IQ pneumatic heat press (40×50 platen, scissor-lift table)',
        ]
      },
      {
        type: 'text',
        body: 'Heat seal presses apply a combination of heat, pressure, and time to bond transfer prints to garments and workwear. Operating temperatures are typically 150–165 °C. The Hotronix Fusion IQ also applies significant pneumatic pressure.'
      },
      {
        type: 'callout',
        variant: 'warning',
        body: 'Only trained and authorised personnel may operate heat seal press equipment. No employee may use any heat seal press unless they have completed this training and been confirmed as authorised by the QHSE Representative.'
      },
      {
        type: 'text',
        body: 'This module must be read alongside:'
      },
      {
        type: 'list',
        items: [
          'CoP Section 4.4.3 — Heat Sealing: Safe Operation',
          'OP-13 — Heat Seal Press Operating Procedure',
          'CAS21 REV 3 — Heat Sealing Garments Risk Assessment',
          'CoP Section 3.14 — Young Persons at Work',
          'CoP Section 3.16 — PPE & Workwear Standards',
        ]
      },
    ]
  },
  {
    id: 'hazards',
    title: 'Principal Hazards',
    icon: '⚠️',
    content: [
      {
        type: 'text',
        body: 'Before operating any heat seal press you must understand the principal hazards identified in CAS21 REV 3:'
      },
      {
        type: 'hazard-cards',
        items: [
          {
            title: 'Contact Burns',
            detail: 'Platens operate at 150–165 °C. Contact with the platen — even briefly — causes serious burns. The platen remains dangerously hot for up to 2 hours after shutdown.',
          },
          {
            title: 'Crushing Injuries',
            detail: 'The platen closes under significant force. Hands or fingers placed between the platen and lower bed during a press cycle will be crushed. The Fusion IQ two-button system is the engineered control — it must never be bypassed.',
          },
          {
            title: 'Fire',
            detail: 'Overheated synthetic fabrics, garments contaminated with solvents or flammable liquids, and incompatible transfer materials can all ignite. Never press materials that have been in contact with solvents or compressed gas.',
          },
          {
            title: 'Electrical Hazards',
            detail: 'Damaged cables or plugs present shock and fire risk. Inspect the cable and plug before every session. Never attempt electrical repairs — isolate and report.',
          },
          {
            title: 'Inhalation of Fumes',
            detail: 'Adhesive vapours can be released during pressing. The room has general dilution ventilation adequate for normal operations. Any unusual or strong odour must be reported immediately and pressing stopped.',
          },
          {
            title: 'Musculoskeletal Strain',
            detail: 'Repetitive pressing and garment handling can cause work-related upper limb disorder (WRULD). Use trolleys for moving boxes. Adjust the Fusion IQ scissor-lift table to the correct working height. Report any discomfort promptly.',
          },
        ]
      }
    ]
  },
  {
    id: 'ppe',
    title: 'PPE Requirements',
    icon: '🦺',
    content: [
      {
        type: 'callout',
        variant: 'info',
        body: 'Safety footwear is mandatory at all times in the operational area. Heat-resistant gloves are strongly recommended when handling hot garments or working near a hot platen — they are provided at every workstation.'
      },
      {
        type: 'ppe-table',
        items: [
          {
            ppe: 'Closed, flat safety footwear',
            when: 'At all times in the operational area',
            mandatory: true,
          },
          {
            ppe: 'Heat-resistant gloves',
            when: 'Recommended when handling garments immediately after pressing, and when working near a hot platen during set-up or cooling',
            mandatory: false,
          },
          {
            ppe: 'Nitrile disposable gloves',
            when: 'When handling adhesive-backed transfer materials for extended periods',
            mandatory: false,
          },
        ]
      },
      {
        type: 'callout',
        variant: 'danger',
        body: 'Loose clothing, scarves, lanyards, and jewellery that could contact the hot platen or become caught in equipment MUST be removed or securely tucked away before operating any heat seal press.'
      }
    ]
  },
  {
    id: 'preuse',
    title: 'Pre-Use Checks',
    icon: '🔍',
    content: [
      {
        type: 'text',
        body: 'Before every session, complete the following inspection on the machine you are about to use. If any defect is identified, report to your supervisor immediately and do not use the machine until the issue has been resolved.'
      },
      {
        type: 'checklist',
        items: [
          'Power cable and plug — no visible damage, cuts, or exposed conductors',
          'Platen surface — no foreign material, residue, or damage to the non-stick coating',
          'Lower bed / platen pad — in good condition, correctly positioned, not worn through',
          'Temperature display — illuminated and showing the correct set temperature',
          'Hot surface warning labels — present and legible on the machine',
          'Workspace — clear of combustible materials, waste backing paper, and trip hazards',
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        body: 'Additional checks for the Stahls\' Hotronix Fusion IQ only:'
      },
      {
        type: 'checklist',
        items: [
          'Pressure setting — set to the correct psi for the transfer material in use',
          'Two-button activation system — both buttons present and operational; must not be defeated or bypassed',
          'Scissor-lift table — adjusted to the appropriate working height before starting',
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        body: 'Additional checks for the Siser TS-ONE only:'
      },
      {
        type: 'checklist',
        items: [
          'Handle mechanism — operates freely with no binding or stiffness',
        ]
      }
    ]
  },
  {
    id: 'settings',
    title: 'Temperature, Pressure & Dwell Time',
    icon: '🌡️',
    content: [
      {
        type: 'text',
        body: 'Transfer parameters vary by material. Always follow the specification provided by your supervisor or the transfer supplier. Do not deviate from set parameters without supervisor approval.'
      },
      {
        type: 'settings-table',
        items: [
          { machine: 'Siser TS-ONE', temp: '164 °C', pressure: 'Handle pressure (manual)', dwell: '10–15 seconds' },
          { machine: 'Hotronix Fusion IQ', temp: '150–165 °C', pressure: 'Set per transfer spec (psi)', dwell: '10–15 seconds' },
        ]
      },
      {
        type: 'text',
        body: 'To adjust temperature on the Siser TS-ONE: use the + and – buttons on the control panel. Wait for the display to confirm the set temperature has been reached before pressing.'
      },
      {
        type: 'text',
        body: 'To adjust settings on the Hotronix Fusion IQ: use the touchscreen to set temperature, pressure, and dwell time. Confirm all three values are correct before starting a production run.'
      },
      {
        type: 'callout',
        variant: 'danger',
        body: 'Never apply transfers to garments or materials that have been in contact with solvents, flammable liquids, combustible liquids, or compressed gas.'
      }
    ]
  },
  {
    id: 'operation-ts1',
    title: 'Operating the Siser TS-ONE',
    icon: '🔧',
    content: [
      {
        type: 'callout',
        variant: 'info',
        body: 'This section covers the pressing cycle for the 7× Siser TS-ONE swing-arm heat presses.'
      },
      {
        type: 'steps',
        items: [
          {
            step: 1,
            title: 'Prepare the garment',
            detail: 'Remove from packaging. Check size and quantity against the job sheet. Pre-press for 3–5 seconds to remove moisture and creases — allow the platen to lift before repositioning.',
          },
          {
            step: 2,
            title: 'Position on the lower bed',
            detail: 'Place the garment flat and centred under the platen. For back prints, open the garment and feed it over the lower bed.',
          },
          {
            step: 3,
            title: 'Place the transfer',
            detail: 'Place the transfer print onto the garment in the correct position. Use a positioning jig or guide sheet where available. Add a cover sheet (silicone or Teflon) if required by the transfer type.',
          },
          {
            step: 4,
            title: 'Press — free hand clear',
            detail: 'Keep your FREE HAND clear of the platen area and lower bed at all times. Depress the handle firmly and evenly to close the platen onto the garment.',
            warning: 'Your free hand must never be near the platen gap during the pressing cycle.',
          },
          {
            step: 5,
            title: 'Hold for dwell time',
            detail: 'Hold the handle down for the required dwell time (standard: 10–15 seconds). Use the workstation timer.',
          },
          {
            step: 6,
            title: 'Release and remove',
            detail: 'Release the handle and allow the platen to lift FULLY before removing the garment. Use heat-resistant gloves (recommended) to remove the garment from the lower bed.',
          },
          {
            step: 7,
            title: 'Peel and inspect',
            detail: 'Peel the transfer backing in the direction specified by the transfer supplier (hot peel or cold peel). Dispose of backing paper in the designated waste bin immediately. Inspect transfer for correct adhesion, coverage, and alignment. Report any quality issue to your supervisor before continuing.',
          },
        ]
      }
    ]
  },
  {
    id: 'operation-iq',
    title: 'Operating the Hotronix Fusion IQ',
    icon: '⚙️',
    content: [
      {
        type: 'callout',
        variant: 'danger',
        body: 'The Hotronix Fusion IQ uses a TWO-BUTTON simultaneous activation system. Both hands must be on the activation buttons before the press cycle begins. This system must NEVER be defeated or bypassed under any circumstances.'
      },
      {
        type: 'steps',
        items: [
          {
            step: 1,
            title: 'Confirm settings on touchscreen',
            detail: 'Check temperature, pressure, and dwell time are correct for the transfer material in use before starting.',
          },
          {
            step: 2,
            title: 'Prepare the garment',
            detail: 'Remove from packaging. Check size and quantity against the job sheet. Pre-press for 3–5 seconds to remove moisture and creases — allow the platen to lift before repositioning.',
          },
          {
            step: 3,
            title: 'Adjust scissor-lift table',
            detail: 'Adjust the table to the correct working height for the operator. This minimises bending and overreach during the pressing cycle.',
          },
          {
            step: 4,
            title: 'Position garment and transfer',
            detail: 'Place the garment flat and centred on the lower bed. For back prints, open the garment and feed it over the lower bed. Place the transfer print in the correct position. Add a cover sheet if required.',
          },
          {
            step: 5,
            title: 'Activate — both hands on buttons',
            detail: 'Place BOTH hands on the two activation buttons simultaneously. Hold both buttons to initiate the press cycle. The platen will lower automatically and apply pressure for the set dwell time.',
            warning: 'Do not attempt to reach into the press area while the platen is in motion.',
          },
          {
            step: 6,
            title: 'Wait for completion signal',
            detail: 'The platen will lift automatically at the end of the dwell time. The machine will emit an audible signal. Remove hands from the activation buttons only after the platen has fully lifted.',
          },
          {
            step: 7,
            title: 'Remove, peel, and inspect',
            detail: 'Using heat-resistant gloves (recommended), remove the garment from the lower bed. Peel the transfer backing in the direction specified (hot peel or cold peel). Dispose of backing paper immediately. Inspect transfer for adhesion, coverage, and alignment. Report any quality issue to your supervisor.',
          },
        ]
      }
    ]
  },
  {
    id: 'shutdown',
    title: 'Shutdown & Housekeeping',
    icon: '🔒',
    content: [
      {
        type: 'text',
        body: 'At the end of every production session or shift, follow this shutdown procedure:'
      },
      {
        type: 'steps',
        items: [
          { step: 1, title: 'Switch off at the machine', detail: 'Switch off using the machine power button or switch.' },
          { step: 2, title: 'Isolate at the mains socket', detail: 'Isolate the machine at the wall socket.' },
          { step: 3, title: 'Allow to cool — do not cover', detail: 'Do not cover or enclose the press. Allow free air circulation during cooling. Do not leave the area while the platen is still at operating temperature unless a supervisor has been informed and the area is cordoned off.' },
          { step: 4, title: 'Post-cool visual check', detail: 'Once cool, visually check the platen surface, lower bed pad, and power cable. Report any damage or deterioration to your supervisor.' },
          { step: 5, title: 'Clear the workstation', detail: 'Dispose of all waste backing paper and packaging. Leave the workstation clean and tidy. Remove any trip hazards.' },
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        body: 'The platen must be allowed to cool for a minimum of 2 hours before it is touched directly without heat-resistant gloves.'
      }
    ]
  },
  {
    id: 'emergencies',
    title: 'Faults, Emergencies & Incidents',
    icon: '🚨',
    content: [
      {
        type: 'emergency-cards',
        items: [
          {
            title: 'Machine Fault',
            steps: [
              'Switch off the machine immediately at the mains socket.',
              'Tag the machine "Do Not Use".',
              'Report to your supervisor and record on the fault log.',
              'Do not use the machine until it has been inspected and cleared by a competent person.',
            ]
          },
          {
            title: 'Burn Injury',
            steps: [
              'Do not burst any blister.',
              'Cool the affected area under cool running water for a minimum of 20 minutes.',
              'Inform a supervisor and first aider immediately.',
              'Complete an accident / near miss report.',
              'Do not apply ice, butter, or any other substance to the burn.',
            ]
          },
          {
            title: 'Smoke or Unusual Odour',
            steps: [
              'Stop pressing immediately.',
              'Switch off the machine at the mains socket.',
              'Ventilate the area — open windows and doors.',
              'Do not re-start the machine until the cause has been identified.',
              'Report to your supervisor. If smoke is significant, activate the fire alarm and evacuate.',
            ]
          },
          {
            title: 'Fire',
            steps: [
              'Activate the nearest break-glass fire alarm call point.',
              'Evacuate immediately via the nearest fire exit.',
              'Assemble at the designated muster point.',
              'Do not attempt to fight the fire unless trained to do so and it is safe to act.',
            ]
          },
        ]
      }
    ]
  },
  {
    id: 'young-persons',
    title: 'Young Persons',
    icon: '👤',
    content: [
      {
        type: 'callout',
        variant: 'danger',
        body: 'Young persons (under 18) must NOT operate heat seal press equipment without direct supervision at all times.'
      },
      {
        type: 'text',
        body: 'Before any person under 18 commences work on heat seal presses, the following must be completed:'
      },
      {
        type: 'list',
        items: [
          'A written young person risk assessment, signed by the parent or guardian and the QHSE Representative',
          'Review of CAS21 REV 3 with the young person',
          'Confirmation that the young person has completed this training module',
        ]
      },
      {
        type: 'text',
        body: 'Young persons must not be left to operate heat seal presses alone under any circumstances. Refer to CoP Section 3.14 (Young Persons at Work) for the full framework of controls.'
      }
    ]
  },
];

export const QUIZ = [
  {
    id: 'q1',
    question: 'What is the standard operating temperature for heat seal presses at Billingham?',
    options: ['100–120 °C', '130–145 °C', '150–165 °C', '170–185 °C'],
    correct: 2,
    explanation: 'Heat seal presses at Billingham operate at typically 150–165 °C. The standard setting for the Siser TS-ONE is 164 °C.'
  },
  {
    id: 'q2',
    question: 'What is the purpose of the two-button activation system on the Hotronix Fusion IQ?',
    options: [
      'To start the timer automatically',
      'To ensure both hands are on the buttons before the press cycle begins, preventing crushing injuries',
      'To allow two operators to work simultaneously',
      'To control the pneumatic pressure'
    ],
    correct: 1,
    explanation: 'The two-button simultaneous activation system is an engineering control that ensures both hands are away from the platen area before the press cycle begins. It must never be defeated or bypassed.'
  },
  {
    id: 'q3',
    question: 'What is the standard dwell time for a pressing cycle?',
    options: ['3–5 seconds', '5–8 seconds', '10–15 seconds', '20–30 seconds'],
    correct: 2,
    explanation: 'The standard dwell time is 10–15 seconds. Always use the workstation timer and do not deviate without supervisor approval.'
  },
  {
    id: 'q4',
    question: 'What must you do immediately if you detect smoke or an unusual odour during pressing?',
    options: [
      'Continue pressing and monitor the situation',
      'Open a window and carry on',
      'Stop pressing immediately, switch off at the mains, ventilate the area, and report to your supervisor',
      'Spray a fire extinguisher at the machine'
    ],
    correct: 2,
    explanation: 'If smoke or unusual odour is detected, stop immediately, isolate the machine at the mains, ventilate the area, and report to your supervisor. Do not restart until the cause is identified.'
  },
  {
    id: 'q5',
    question: 'How long must the platen cool before it can be touched directly without heat-resistant gloves?',
    options: ['15 minutes', '30 minutes', '1 hour', '2 hours'],
    correct: 3,
    explanation: 'The platen must cool for a minimum of 2 hours before it can be touched directly without heat-resistant gloves.'
  },
  {
    id: 'q6',
    question: 'Which of the following materials must NEVER be pressed?',
    options: [
      'A cotton polo shirt',
      'A garment that has been in contact with a solvent or flammable liquid',
      'A synthetic fleece at the correct temperature setting',
      'A garment with a previous embroidered badge'
    ],
    correct: 1,
    explanation: 'Garments or materials that have been in contact with solvents, flammable liquids, combustible liquids, or compressed gas must never be pressed. This presents a serious fire risk.'
  },
  {
    id: 'q7',
    question: 'What is the correct first aid response to a burn injury?',
    options: [
      'Apply butter or cream to the burn immediately',
      'Burst any blister to relieve pressure, then bandage',
      'Apply ice directly to the burn for 10 minutes',
      'Cool under cool running water for a minimum of 20 minutes, do not burst blisters, inform supervisor and first aider'
    ],
    correct: 3,
    explanation: 'Cool under cool running water for a minimum of 20 minutes. Do not burst blisters, and do not apply ice, butter, or any other substance. Inform a supervisor and first aider immediately and complete an incident report.'
  },
  {
    id: 'q8',
    question: 'Heat-resistant gloves are recommended when removing garments from the press. When should you use them?',
    options: [
      'Only when the machine is above 180 °C',
      'When handling garments immediately after pressing, and when working near a hot platen during set-up or cooling',
      'Only during cleaning',
      'Only when using the Fusion IQ'
    ],
    correct: 1,
    explanation: 'Heat-resistant gloves are strongly recommended when handling garments immediately after pressing and when working near a hot platen during set-up or cooling. They are provided at every workstation on both machines.'
  },
];
