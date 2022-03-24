import {Dataprocessingconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataprocessingconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dataprocessingconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dataprocessingconfiguration();
}
