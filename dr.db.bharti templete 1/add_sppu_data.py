import json

sppu_data = {
  "title": "Savitribai Phule Pune University (SPPU) Board & Governance",
  "subtitle": "Over four decades of distinguished statutory governance, academic board chairmanships, syllabus restructuring, examination oversight, and university leadership.",
  "recognitions": [
    {
      "title": "Letter of Appreciation & Recognition",
      "authority": "Registrar & Dean, Savitribai Phule Pune University",
      "description": "Formally recognized for pioneering leadership in academic administration, university governance, and comprehensive syllabus reforms."
    },
    {
      "title": "Letter of Appreciation & Recognition",
      "authority": "Pro-Vice Chancellor, Savitribai Phule Pune University",
      "description": "Conferred high commendation for dedicated institutional governance and advancing commerce and management education standards."
    }
  ],
  "categories": [
    {
      "id": "statutory-boards",
      "categoryName": "Statutory Boards & University Councils",
      "badge": "Statutory Authority",
      "items": [
        {
          "role": "Former Academic Council Member",
          "body": "Savitribai Phule Pune University (SPPU)",
          "details": "Served on the university's supreme academic authority, determining academic policy, research direction, and faculty regulations."
        },
        {
          "role": "Former Chairman of Finance Board",
          "body": "Faculty of Management, Savitribai Phule Pune University",
          "details": "Headed the financial management board, governing university curriculum development, financial pedagogy, and faculty coordination."
        },
        {
          "role": "Special Invitee / Ex-Member",
          "body": "Faculty of Commerce and Management, SPPU",
          "details": "Participated in strategic statutory decisions, academic affiliations, interdisciplinary guidelines, and research ethics."
        },
        {
          "role": "Ex-BOS Member — International Business Management",
          "body": "Commerce and Management Faculty, SPPU",
          "details": "Contributed to curriculum standardization, credits allocation, and evaluation metrics for international business studies."
        },
        {
          "role": "Ex-Member, Board of Studies (BOS) of Accountancy",
          "body": "University of Pune (2001 – 2005)",
          "details": "Designed accountancy curricula, standardized accounting instruction, and regulated standards across undergraduate and postgraduate commerce."
        },
        {
          "role": "Ex-Member, Research & Recognition (RR) Committee",
          "body": "Financial Management & Management, SPPU",
          "details": "Evaluated Ph.D. research proposals, synopsis approvals, and guide recognitions for doctoral scholars across Pune University."
        },
        {
          "role": "Former Member, BCUD Sub-Committee",
          "body": "Board of College and University Development, SPPU",
          "details": "Oversaw institutional development grants, faculty research projects, and university college quality enhancement initiatives."
        },
        {
          "role": "Ex-Member, RR Committee (Management)",
          "body": "Dr. D. Y. Patil University (DPU), Pimpri",
          "details": "Appointed university expert on research and recognition for management doctoral dissertations and scholar evaluations."
        }
      ]
    },
    {
      "id": "syllabus-architecture",
      "categoryName": "Curriculum Design & Syllabus Architecture",
      "badge": "Academic Reform",
      "items": [
        {
          "role": "MBA Syllabus Restructuring Committee 2016",
          "body": "Savitribai Phule Pune University",
          "details": "Entrusted with the entire responsibility of structuring MBA specializations to align with evolving corporate expectations."
        },
        {
          "role": "MBA Syllabus Restructuring Committee 2019",
          "body": "Savitribai Phule Pune University",
          "details": "Key architect for Management Accounting and Financial Management curricula in the revised CBCS university framework."
        },
        {
          "role": "Convener — Introduction of GST into Syllabi (Dec 2017)",
          "body": "SPPU M.Com. and MBA Curriculum Committees",
          "details": "Appointed Convener to modify Indirect Taxation syllabus, leading the rollout of Goods & Services Tax (GST) across SPPU programs."
        },
        {
          "role": "Undergraduate & Postgraduate Accountancy Restructuring",
          "body": "University of Pune",
          "details": "Active contributor in restructuring accountancy syllabi across F.Y.B.Com, S.Y.B.Com, T.Y.B.Com, and M.Com levels."
        },
        {
          "role": "Syllabus Structuring Committee Member",
          "body": "Sanjay Ghodawat Private University, Kolhapur",
          "details": "Appointed expert committee member for designing MBA and postgraduate management programs for the newly established private university."
        }
      ]
    },
    {
      "id": "examination-governance",
      "categoryName": "Examination Governance & Doctoral Referees",
      "badge": "Evaluation & Viva",
      "items": [
        {
          "role": "Chairman & Paper Setter — Ph.D. Entrance Examination (PET)",
          "body": "Foreign Trade Paper II, University of Pune (Feb 2009)",
          "details": "Appointed as paper setter and evaluator for university-wide doctoral entrance assessments."
        },
        {
          "role": "Chairman — MBA Viva-Voce Examinations",
          "body": "University of Pune",
          "details": "Conducted executive viva-voce examinations and defended student project dissertations across affiliated institutes."
        },
        {
          "role": "Paper Setter, Examiner, Moderator & Chairman",
          "body": "MBA, MBS, PGDCCM, PGDBF, PGDBM, MMM Annual Exams, SPPU",
          "details": "Chaired evaluation committees and set annual examination papers for major postgraduate diploma and degree courses."
        },
        {
          "role": "Senior Supervisor for Annual Examinations",
          "body": "University of Pune",
          "details": "Headed examination center integrity, confidential processing, and university flying squad protocols."
        },
        {
          "role": "External Ph.D. Thesis Referee & Viva Examiner",
          "body": "Barkatullah University Bhopal, RTM Nagpur University & SPPU",
          "details": "Evaluated and adjudicated doctoral theses across commerce, banking, and management faculties."
        }
      ]
    },
    {
      "id": "selection-committees",
      "categoryName": "Statutory Selection Committees & Inspection (LIC)",
      "badge": "Institutional Quality",
      "items": [
        {
          "role": "Chairman & Member, Local Inquiry Committee (LIC)",
          "body": "University of Pune",
          "details": "Conducted statutory college inspections, affiliation verifications, faculty qualification checks, and infrastructure audits."
        },
        {
          "role": "University Subject Expert — Selection of Directors",
          "body": "Camp Education Society's & Sahyadri Institute of Management, Pune",
          "details": "Appointed by SPPU Vice-Chancellor as subject expert on statutory selection panels for Institute Directors."
        },
        {
          "role": "University Subject Expert — Faculty Selection Panels",
          "body": "Professors, Associate Professors & Assistant Professors, SPPU",
          "details": "Conducted official interviews and UGC CAS evaluations for faculty appointments across Pune University management colleges."
        },
        {
          "role": "Subject Expert for Teachers Fellowship Committee",
          "body": "Garware College of Commerce, Pune",
          "details": "Evaluated research proposals and awarded teacher research fellowships under UGC schemes."
        }
      ]
    }
  ]
}

# Update server/data/portfolioData.json
with open('server/data/portfolioData.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

d['sppuGovernance'] = sppu_data

with open('server/data/portfolioData.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print("Updated server/data/portfolioData.json")

# Update api/data/portfolioData.json
with open('api/data/portfolioData.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print("Updated api/data/portfolioData.json")

# Update client/src/data/initialData.js
js_code = "export const fallbackData = " + json.dumps(d, indent=2, ensure_ascii=False) + ";\n"
with open('client/src/data/initialData.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
print("Updated client/src/data/initialData.js")

