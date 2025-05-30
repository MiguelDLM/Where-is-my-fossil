#!/usr/bin/env python3
import json
import os

def load_json_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def analyze_translations():
    # Load English reference
    en_data = load_json_file('en.json')
    en_keys = set(en_data.keys())
    total_en_keys = len(en_keys)
    
    # Language files to check
    language_files = {
        'es': 'es.json',
        'fr': 'fr.json', 
        'it': 'it.json',
        'pt': 'pt.json',
        'de': 'de.json',
        'el': 'el.json',
        'ca': 'ca.json',
        'zh_CN': 'zh_CN.json'
    }
    
    results = {}
    
    for lang_code, filename in language_files.items():
        if os.path.exists(filename):
            lang_data = load_json_file(filename)
            lang_keys = set(lang_data.keys())
            
            missing_keys = en_keys - lang_keys
            extra_keys = lang_keys - en_keys
            
            completion_percentage = ((total_en_keys - len(missing_keys)) / total_en_keys) * 100
            
            results[lang_code] = {
                'total_keys': len(lang_keys),
                'missing_count': len(missing_keys),
                'extra_count': len(extra_keys),
                'completion_percentage': completion_percentage,
                'missing_keys': sorted(list(missing_keys))[:10]  # Show first 10 missing keys
            }
            
            print(f"\n{lang_code.upper()} ({filename}):")
            print(f"  Total keys: {len(lang_keys)}")
            print(f"  Missing keys: {len(missing_keys)}")
            print(f"  Extra keys: {len(extra_keys)}")
            print(f"  Completion: {completion_percentage:.1f}%")
            
            if missing_keys:
                print(f"  First missing keys: {sorted(list(missing_keys))[:5]}")
        else:
            print(f"\n{lang_code.upper()}: File {filename} not found")
    
    print(f"\nEnglish reference has {total_en_keys} total keys")
    
    # Summary
    print("\n=== SUMMARY ===")
    for lang_code, data in results.items():
        status = "✅ COMPLETE" if data['missing_count'] == 0 else f"⚠️  {data['missing_count']} missing"
        print(f"{lang_code}: {data['completion_percentage']:.1f}% - {status}")

if __name__ == "__main__":
    analyze_translations()
