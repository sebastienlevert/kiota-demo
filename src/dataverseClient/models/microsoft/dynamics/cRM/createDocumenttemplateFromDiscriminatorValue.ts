import {Documenttemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumenttemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Documenttemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Documenttemplate();
}
