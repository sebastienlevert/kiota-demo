import {Incidentresolution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncidentresolutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Incidentresolution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Incidentresolution();
}
