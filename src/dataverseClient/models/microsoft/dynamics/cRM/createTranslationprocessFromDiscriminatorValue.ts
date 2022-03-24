import {Translationprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTranslationprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Translationprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Translationprocess();
}
