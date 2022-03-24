import {Salesliterature} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSalesliteratureFromDiscriminatorValue(parseNode: ParseNode | undefined) : Salesliterature {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Salesliterature();
}
