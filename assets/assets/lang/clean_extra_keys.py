#!/usr/bin/env python3
import json
import os

def load_json_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json_file(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def remove_extra_keys():
    # Load English reference
    en_data = load_json_file('en.json')
    en_keys = set(en_data.keys())
    
    # Language files to clean
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
    
    print(f"English reference has {len(en_keys)} keys")
    print("\nRemoving extra keys from translation files...\n")
    
    for lang_code, filename in language_files.items():
        if os.path.exists(filename):
            lang_data = load_json_file(filename)
            lang_keys = set(lang_data.keys())
            
            extra_keys = lang_keys - en_keys
            
            if extra_keys:
                print(f"{lang_code.upper()} ({filename}):")
                print(f"  Extra keys to remove: {sorted(list(extra_keys))}")
                
                # Create new data with only valid keys
                cleaned_data = {key: value for key, value in lang_data.items() if key in en_keys}
                
                # Save cleaned file
                save_json_file(filename, cleaned_data)
                print(f"  ✅ Removed {len(extra_keys)} extra keys")
                print(f"  Keys remaining: {len(cleaned_data)}")
            else:
                print(f"{lang_code.upper()} ({filename}): No extra keys to remove ✅")
        else:
            print(f"{lang_code.upper()}: File {filename} not found")
        
        print()
    
    print("=== CLEANUP COMPLETED ===")

if __name__ == "__main__":
    remove_extra_keys()
