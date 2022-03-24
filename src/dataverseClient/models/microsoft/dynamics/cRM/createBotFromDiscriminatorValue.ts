import {Bot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBotFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bot();
}
