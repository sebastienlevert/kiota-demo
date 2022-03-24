import {Languagelocale} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLanguagelocaleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Languagelocale {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Languagelocale();
}
