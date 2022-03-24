import {Botcomponent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBotcomponentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Botcomponent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Botcomponent();
}
