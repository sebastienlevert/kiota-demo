import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createExpiredprocessFromDiscriminatorValue} from './createExpiredprocessFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createLeadtoopportunitysalesprocessFromDiscriminatorValue} from './createLeadtoopportunitysalesprocessFromDiscriminatorValue';
import {createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue} from './createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue';
import {createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue} from './createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue';
import {createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue} from './createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue';
import {createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue} from './createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue';
import {createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue} from './createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue';
import {createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue} from './createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue';
import {createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue} from './createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue';
import {createMsdyn_iottocaseprocessFromDiscriminatorValue} from './createMsdyn_iottocaseprocessFromDiscriminatorValue';
import {createNewprocessFromDiscriminatorValue} from './createNewprocessFromDiscriminatorValue';
import {createOpportunitysalesprocessFromDiscriminatorValue} from './createOpportunitysalesprocessFromDiscriminatorValue';
import {createPhonetocaseprocessFromDiscriminatorValue} from './createPhonetocaseprocessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTranslationprocessFromDiscriminatorValue} from './createTranslationprocessFromDiscriminatorValue';
import {Asyncoperation, Businessunit, Crmbaseentity, Expiredprocess, Fileattachment, Leadtoopportunitysalesprocess, Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b, Msdyn_bpf_665e73aa18c247d886bfc50499c73b82, Msdyn_bpf_989e9b1857e24af18787d5143b67523b, Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39, Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d, Msdyn_iottocaseprocess, Newprocess, Opportunitysalesprocess, Phonetocaseprocess, Processsession, Systemuser, Team, Translationprocess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Workflowlog extends Crmbaseentity implements Parsable {
    private __asyncoperationid_value?: string | undefined;
    private __childworkflowinstanceid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _activityname?: string | undefined;
    private _asyncoperationid_asyncoperation?: Asyncoperation | undefined;
    private _asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 | undefined;
    private _asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b?: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b | undefined;
    private _asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82?: Msdyn_bpf_665e73aa18c247d886bfc50499c73b82 | undefined;
    private _asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b?: Msdyn_bpf_989e9b1857e24af18787d5143b67523b | undefined;
    private _asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 | undefined;
    private _asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39?: Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 | undefined;
    private _asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d?: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d | undefined;
    private _asyncoperationid_msdyn_iottocaseprocess?: Msdyn_iottocaseprocess | undefined;
    private _asyncoperationid_processsession?: Processsession | undefined;
    private _childworkflowinstanceid_asyncoperation?: Asyncoperation | undefined;
    private _childworkflowinstanceid_processsession?: Processsession | undefined;
    private _completedon?: Date | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _duration?: number | undefined;
    private _errorcode?: number | undefined;
    private _errortext?: string | undefined;
    private _expiredProcess_asyncoperationid?: Expiredprocess | undefined;
    private _inputs?: string | undefined;
    private _inputs_name?: string | undefined;
    private _interactionactivityresult?: string | undefined;
    private _iterationcount?: number | undefined;
    private _leadToOpportunitySalesProcess_asyncoperationid?: Leadtoopportunitysalesprocess | undefined;
    private _message?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _newProcess_asyncoperationid?: Newprocess | undefined;
    private _opportunitySalesProcess_asyncoperationid?: Opportunitysalesprocess | undefined;
    private _outputs?: string | undefined;
    private _outputs_name?: string | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _phoneToCaseProcess_asyncoperationid?: Phonetocaseprocess | undefined;
    private _repetitioncount?: number | undefined;
    private _repetitionid?: string | undefined;
    private _stagename?: string | undefined;
    private _startedon?: Date | undefined;
    private _status?: number | undefined;
    private _stepname?: string | undefined;
    private _translationProcess_asyncoperationid?: Translationprocess | undefined;
    private _workflowlog_FileAttachments?: Fileattachment[] | undefined;
    private _workflowlogid?: string | undefined;
    /**
     * Gets the _asyncoperationid_value property value. 
     * @returns a string
     */
    public get _asyncoperationid_value() {
        return this.__asyncoperationid_value;
    };
    /**
     * Sets the _asyncoperationid_value property value. 
     * @param value Value to set for the _asyncoperationid_value property.
     */
    public set _asyncoperationid_value(value: string | undefined) {
        this.__asyncoperationid_value = value;
    };
    /**
     * Gets the _childworkflowinstanceid_value property value. 
     * @returns a string
     */
    public get _childworkflowinstanceid_value() {
        return this.__childworkflowinstanceid_value;
    };
    /**
     * Sets the _childworkflowinstanceid_value property value. 
     * @param value Value to set for the _childworkflowinstanceid_value property.
     */
    public set _childworkflowinstanceid_value(value: string | undefined) {
        this.__childworkflowinstanceid_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the activityname property value. 
     * @returns a string
     */
    public get activityname() {
        return this._activityname;
    };
    /**
     * Sets the activityname property value. 
     * @param value Value to set for the activityname property.
     */
    public set activityname(value: string | undefined) {
        this._activityname = value;
    };
    /**
     * Gets the asyncoperationid_asyncoperation property value. 
     * @returns a asyncoperation
     */
    public get asyncoperationid_asyncoperation() {
        return this._asyncoperationid_asyncoperation;
    };
    /**
     * Sets the asyncoperationid_asyncoperation property value. 
     * @param value Value to set for the asyncoperationid_asyncoperation property.
     */
    public set asyncoperationid_asyncoperation(value: Asyncoperation | undefined) {
        this._asyncoperationid_asyncoperation = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @returns a msdyn_bpf_2c5fe86acc8b414b8322ae571000c799
     */
    public get asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799() {
        return this._asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property.
     */
    public set asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799(value: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 | undefined) {
        this._asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property value. 
     * @returns a msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b
     */
    public get asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b() {
        return this._asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b property.
     */
    public set asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b(value: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b | undefined) {
        this._asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82 property value. 
     * @returns a msdyn_bpf_665e73aa18c247d886bfc50499c73b82
     */
    public get asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82() {
        return this._asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82 property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82 property.
     */
    public set asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82(value: Msdyn_bpf_665e73aa18c247d886bfc50499c73b82 | undefined) {
        this._asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82 = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b property value. 
     * @returns a msdyn_bpf_989e9b1857e24af18787d5143b67523b
     */
    public get asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b() {
        return this._asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b property.
     */
    public set asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b(value: Msdyn_bpf_989e9b1857e24af18787d5143b67523b | undefined) {
        this._asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @returns a msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3
     */
    public get asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3() {
        return this._asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property.
     */
    public set asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3(value: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 | undefined) {
        this._asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 property value. 
     * @returns a msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39
     */
    public get asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39() {
        return this._asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 property.
     */
    public set asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39(value: Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 | undefined) {
        this._asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property value. 
     * @returns a msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d
     */
    public get asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d() {
        return this._asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d;
    };
    /**
     * Sets the asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property value. 
     * @param value Value to set for the asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d property.
     */
    public set asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d(value: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d | undefined) {
        this._asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d = value;
    };
    /**
     * Gets the asyncoperationid_msdyn_iottocaseprocess property value. 
     * @returns a msdyn_iottocaseprocess
     */
    public get asyncoperationid_msdyn_iottocaseprocess() {
        return this._asyncoperationid_msdyn_iottocaseprocess;
    };
    /**
     * Sets the asyncoperationid_msdyn_iottocaseprocess property value. 
     * @param value Value to set for the asyncoperationid_msdyn_iottocaseprocess property.
     */
    public set asyncoperationid_msdyn_iottocaseprocess(value: Msdyn_iottocaseprocess | undefined) {
        this._asyncoperationid_msdyn_iottocaseprocess = value;
    };
    /**
     * Gets the asyncoperationid_processsession property value. 
     * @returns a processsession
     */
    public get asyncoperationid_processsession() {
        return this._asyncoperationid_processsession;
    };
    /**
     * Sets the asyncoperationid_processsession property value. 
     * @param value Value to set for the asyncoperationid_processsession property.
     */
    public set asyncoperationid_processsession(value: Processsession | undefined) {
        this._asyncoperationid_processsession = value;
    };
    /**
     * Gets the childworkflowinstanceid_asyncoperation property value. 
     * @returns a asyncoperation
     */
    public get childworkflowinstanceid_asyncoperation() {
        return this._childworkflowinstanceid_asyncoperation;
    };
    /**
     * Sets the childworkflowinstanceid_asyncoperation property value. 
     * @param value Value to set for the childworkflowinstanceid_asyncoperation property.
     */
    public set childworkflowinstanceid_asyncoperation(value: Asyncoperation | undefined) {
        this._childworkflowinstanceid_asyncoperation = value;
    };
    /**
     * Gets the childworkflowinstanceid_processsession property value. 
     * @returns a processsession
     */
    public get childworkflowinstanceid_processsession() {
        return this._childworkflowinstanceid_processsession;
    };
    /**
     * Sets the childworkflowinstanceid_processsession property value. 
     * @param value Value to set for the childworkflowinstanceid_processsession property.
     */
    public set childworkflowinstanceid_processsession(value: Processsession | undefined) {
        this._childworkflowinstanceid_processsession = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new workflowlog and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the duration property value. 
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. 
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the errorcode property value. 
     * @returns a integer
     */
    public get errorcode() {
        return this._errorcode;
    };
    /**
     * Sets the errorcode property value. 
     * @param value Value to set for the errorcode property.
     */
    public set errorcode(value: number | undefined) {
        this._errorcode = value;
    };
    /**
     * Gets the errortext property value. 
     * @returns a string
     */
    public get errortext() {
        return this._errortext;
    };
    /**
     * Sets the errortext property value. 
     * @param value Value to set for the errortext property.
     */
    public set errortext(value: string | undefined) {
        this._errortext = value;
    };
    /**
     * Gets the expiredProcess_asyncoperationid property value. 
     * @returns a expiredprocess
     */
    public get expiredProcess_asyncoperationid() {
        return this._expiredProcess_asyncoperationid;
    };
    /**
     * Sets the expiredProcess_asyncoperationid property value. 
     * @param value Value to set for the ExpiredProcess_asyncoperationid property.
     */
    public set expiredProcess_asyncoperationid(value: Expiredprocess | undefined) {
        this._expiredProcess_asyncoperationid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_asyncoperationid_value": (o, n) => { (o as unknown as Workflowlog)._asyncoperationid_value = n.getStringValue(); },
            "_childworkflowinstanceid_value": (o, n) => { (o as unknown as Workflowlog)._childworkflowinstanceid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Workflowlog)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Workflowlog)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Workflowlog)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Workflowlog)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Workflowlog)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Workflowlog)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Workflowlog)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Workflowlog)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Workflowlog)._regardingobjectid_value = n.getStringValue(); },
            "activityname": (o, n) => { (o as unknown as Workflowlog).activityname = n.getStringValue(); },
            "asyncoperationid_asyncoperation": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_asyncoperation = n.getObjectValue<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = n.getObjectValue<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>(createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b = n.getObjectValue<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>(createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82 = n.getObjectValue<Msdyn_bpf_665e73aa18c247d886bfc50499c73b82>(createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b = n.getObjectValue<Msdyn_bpf_989e9b1857e24af18787d5143b67523b>(createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = n.getObjectValue<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>(createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 = n.getObjectValue<Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39>(createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue); },
            "asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d = n.getObjectValue<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>(createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue); },
            "asyncoperationid_msdyn_iottocaseprocess": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_msdyn_iottocaseprocess = n.getObjectValue<Msdyn_iottocaseprocess>(createMsdyn_iottocaseprocessFromDiscriminatorValue); },
            "asyncoperationid_processsession": (o, n) => { (o as unknown as Workflowlog).asyncoperationid_processsession = n.getObjectValue<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "childworkflowinstanceid_asyncoperation": (o, n) => { (o as unknown as Workflowlog).childworkflowinstanceid_asyncoperation = n.getObjectValue<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "childworkflowinstanceid_processsession": (o, n) => { (o as unknown as Workflowlog).childworkflowinstanceid_processsession = n.getObjectValue<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "completedon": (o, n) => { (o as unknown as Workflowlog).completedon = n.getDateValue(); },
            "createdby": (o, n) => { (o as unknown as Workflowlog).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Workflowlog).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Workflowlog).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Workflowlog).description = n.getStringValue(); },
            "duration": (o, n) => { (o as unknown as Workflowlog).duration = n.getNumberValue(); },
            "errorcode": (o, n) => { (o as unknown as Workflowlog).errorcode = n.getNumberValue(); },
            "errortext": (o, n) => { (o as unknown as Workflowlog).errortext = n.getStringValue(); },
            "expiredProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).expiredProcess_asyncoperationid = n.getObjectValue<Expiredprocess>(createExpiredprocessFromDiscriminatorValue); },
            "inputs": (o, n) => { (o as unknown as Workflowlog).inputs = n.getStringValue(); },
            "inputs_name": (o, n) => { (o as unknown as Workflowlog).inputs_name = n.getStringValue(); },
            "interactionactivityresult": (o, n) => { (o as unknown as Workflowlog).interactionactivityresult = n.getStringValue(); },
            "iterationcount": (o, n) => { (o as unknown as Workflowlog).iterationcount = n.getNumberValue(); },
            "leadToOpportunitySalesProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).leadToOpportunitySalesProcess_asyncoperationid = n.getObjectValue<Leadtoopportunitysalesprocess>(createLeadtoopportunitysalesprocessFromDiscriminatorValue); },
            "message": (o, n) => { (o as unknown as Workflowlog).message = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Workflowlog).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Workflowlog).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Workflowlog).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "newProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).newProcess_asyncoperationid = n.getObjectValue<Newprocess>(createNewprocessFromDiscriminatorValue); },
            "opportunitySalesProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).opportunitySalesProcess_asyncoperationid = n.getObjectValue<Opportunitysalesprocess>(createOpportunitysalesprocessFromDiscriminatorValue); },
            "outputs": (o, n) => { (o as unknown as Workflowlog).outputs = n.getStringValue(); },
            "outputs_name": (o, n) => { (o as unknown as Workflowlog).outputs_name = n.getStringValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Workflowlog).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Workflowlog).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "phoneToCaseProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).phoneToCaseProcess_asyncoperationid = n.getObjectValue<Phonetocaseprocess>(createPhonetocaseprocessFromDiscriminatorValue); },
            "repetitioncount": (o, n) => { (o as unknown as Workflowlog).repetitioncount = n.getNumberValue(); },
            "repetitionid": (o, n) => { (o as unknown as Workflowlog).repetitionid = n.getStringValue(); },
            "stagename": (o, n) => { (o as unknown as Workflowlog).stagename = n.getStringValue(); },
            "startedon": (o, n) => { (o as unknown as Workflowlog).startedon = n.getDateValue(); },
            "status": (o, n) => { (o as unknown as Workflowlog).status = n.getNumberValue(); },
            "stepname": (o, n) => { (o as unknown as Workflowlog).stepname = n.getStringValue(); },
            "translationProcess_asyncoperationid": (o, n) => { (o as unknown as Workflowlog).translationProcess_asyncoperationid = n.getObjectValue<Translationprocess>(createTranslationprocessFromDiscriminatorValue); },
            "workflowlog_FileAttachments": (o, n) => { (o as unknown as Workflowlog).workflowlog_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "workflowlogid": (o, n) => { (o as unknown as Workflowlog).workflowlogid = n.getStringValue(); },
        };
    };
    /**
     * Gets the inputs property value. 
     * @returns a binary
     */
    public get inputs() {
        return this._inputs;
    };
    /**
     * Sets the inputs property value. 
     * @param value Value to set for the inputs property.
     */
    public set inputs(value: string | undefined) {
        this._inputs = value;
    };
    /**
     * Gets the inputs_name property value. 
     * @returns a string
     */
    public get inputs_name() {
        return this._inputs_name;
    };
    /**
     * Sets the inputs_name property value. 
     * @param value Value to set for the inputs_name property.
     */
    public set inputs_name(value: string | undefined) {
        this._inputs_name = value;
    };
    /**
     * Gets the interactionactivityresult property value. 
     * @returns a string
     */
    public get interactionactivityresult() {
        return this._interactionactivityresult;
    };
    /**
     * Sets the interactionactivityresult property value. 
     * @param value Value to set for the interactionactivityresult property.
     */
    public set interactionactivityresult(value: string | undefined) {
        this._interactionactivityresult = value;
    };
    /**
     * Gets the iterationcount property value. 
     * @returns a integer
     */
    public get iterationcount() {
        return this._iterationcount;
    };
    /**
     * Sets the iterationcount property value. 
     * @param value Value to set for the iterationcount property.
     */
    public set iterationcount(value: number | undefined) {
        this._iterationcount = value;
    };
    /**
     * Gets the leadToOpportunitySalesProcess_asyncoperationid property value. 
     * @returns a leadtoopportunitysalesprocess
     */
    public get leadToOpportunitySalesProcess_asyncoperationid() {
        return this._leadToOpportunitySalesProcess_asyncoperationid;
    };
    /**
     * Sets the leadToOpportunitySalesProcess_asyncoperationid property value. 
     * @param value Value to set for the LeadToOpportunitySalesProcess_asyncoperationid property.
     */
    public set leadToOpportunitySalesProcess_asyncoperationid(value: Leadtoopportunitysalesprocess | undefined) {
        this._leadToOpportunitySalesProcess_asyncoperationid = value;
    };
    /**
     * Gets the message property value. 
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the newProcess_asyncoperationid property value. 
     * @returns a newprocess
     */
    public get newProcess_asyncoperationid() {
        return this._newProcess_asyncoperationid;
    };
    /**
     * Sets the newProcess_asyncoperationid property value. 
     * @param value Value to set for the NewProcess_asyncoperationid property.
     */
    public set newProcess_asyncoperationid(value: Newprocess | undefined) {
        this._newProcess_asyncoperationid = value;
    };
    /**
     * Gets the opportunitySalesProcess_asyncoperationid property value. 
     * @returns a opportunitysalesprocess
     */
    public get opportunitySalesProcess_asyncoperationid() {
        return this._opportunitySalesProcess_asyncoperationid;
    };
    /**
     * Sets the opportunitySalesProcess_asyncoperationid property value. 
     * @param value Value to set for the OpportunitySalesProcess_asyncoperationid property.
     */
    public set opportunitySalesProcess_asyncoperationid(value: Opportunitysalesprocess | undefined) {
        this._opportunitySalesProcess_asyncoperationid = value;
    };
    /**
     * Gets the outputs property value. 
     * @returns a binary
     */
    public get outputs() {
        return this._outputs;
    };
    /**
     * Sets the outputs property value. 
     * @param value Value to set for the outputs property.
     */
    public set outputs(value: string | undefined) {
        this._outputs = value;
    };
    /**
     * Gets the outputs_name property value. 
     * @returns a string
     */
    public get outputs_name() {
        return this._outputs_name;
    };
    /**
     * Sets the outputs_name property value. 
     * @param value Value to set for the outputs_name property.
     */
    public set outputs_name(value: string | undefined) {
        this._outputs_name = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the phoneToCaseProcess_asyncoperationid property value. 
     * @returns a phonetocaseprocess
     */
    public get phoneToCaseProcess_asyncoperationid() {
        return this._phoneToCaseProcess_asyncoperationid;
    };
    /**
     * Sets the phoneToCaseProcess_asyncoperationid property value. 
     * @param value Value to set for the PhoneToCaseProcess_asyncoperationid property.
     */
    public set phoneToCaseProcess_asyncoperationid(value: Phonetocaseprocess | undefined) {
        this._phoneToCaseProcess_asyncoperationid = value;
    };
    /**
     * Gets the repetitioncount property value. 
     * @returns a integer
     */
    public get repetitioncount() {
        return this._repetitioncount;
    };
    /**
     * Sets the repetitioncount property value. 
     * @param value Value to set for the repetitioncount property.
     */
    public set repetitioncount(value: number | undefined) {
        this._repetitioncount = value;
    };
    /**
     * Gets the repetitionid property value. 
     * @returns a string
     */
    public get repetitionid() {
        return this._repetitionid;
    };
    /**
     * Sets the repetitionid property value. 
     * @param value Value to set for the repetitionid property.
     */
    public set repetitionid(value: string | undefined) {
        this._repetitionid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_asyncoperationid_value", this._asyncoperationid_value);
        writer.writeStringValue("_childworkflowinstanceid_value", this._childworkflowinstanceid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("activityname", this.activityname);
        writer.writeObjectValue<Asyncoperation>("asyncoperationid_asyncoperation", this.asyncoperationid_asyncoperation);
        writer.writeObjectValue<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>("asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799", this.asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799);
        writer.writeObjectValue<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>("asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b", this.asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b);
        writer.writeObjectValue<Msdyn_bpf_665e73aa18c247d886bfc50499c73b82>("asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82", this.asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82);
        writer.writeObjectValue<Msdyn_bpf_989e9b1857e24af18787d5143b67523b>("asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b", this.asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b);
        writer.writeObjectValue<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>("asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3", this.asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3);
        writer.writeObjectValue<Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39>("asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39", this.asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39);
        writer.writeObjectValue<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>("asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d", this.asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d);
        writer.writeObjectValue<Msdyn_iottocaseprocess>("asyncoperationid_msdyn_iottocaseprocess", this.asyncoperationid_msdyn_iottocaseprocess);
        writer.writeObjectValue<Processsession>("asyncoperationid_processsession", this.asyncoperationid_processsession);
        writer.writeObjectValue<Asyncoperation>("childworkflowinstanceid_asyncoperation", this.childworkflowinstanceid_asyncoperation);
        writer.writeObjectValue<Processsession>("childworkflowinstanceid_processsession", this.childworkflowinstanceid_processsession);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("duration", this.duration);
        writer.writeNumberValue("errorcode", this.errorcode);
        writer.writeStringValue("errortext", this.errortext);
        writer.writeObjectValue<Expiredprocess>("expiredProcess_asyncoperationid", this.expiredProcess_asyncoperationid);
        writer.writeStringValue("inputs", this.inputs);
        writer.writeStringValue("inputs_name", this.inputs_name);
        writer.writeStringValue("interactionactivityresult", this.interactionactivityresult);
        writer.writeNumberValue("iterationcount", this.iterationcount);
        writer.writeObjectValue<Leadtoopportunitysalesprocess>("leadToOpportunitySalesProcess_asyncoperationid", this.leadToOpportunitySalesProcess_asyncoperationid);
        writer.writeStringValue("message", this.message);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Newprocess>("newProcess_asyncoperationid", this.newProcess_asyncoperationid);
        writer.writeObjectValue<Opportunitysalesprocess>("opportunitySalesProcess_asyncoperationid", this.opportunitySalesProcess_asyncoperationid);
        writer.writeStringValue("outputs", this.outputs);
        writer.writeStringValue("outputs_name", this.outputs_name);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Phonetocaseprocess>("phoneToCaseProcess_asyncoperationid", this.phoneToCaseProcess_asyncoperationid);
        writer.writeNumberValue("repetitioncount", this.repetitioncount);
        writer.writeStringValue("repetitionid", this.repetitionid);
        writer.writeStringValue("stagename", this.stagename);
        writer.writeDateValue("startedon", this.startedon);
        writer.writeNumberValue("status", this.status);
        writer.writeStringValue("stepname", this.stepname);
        writer.writeObjectValue<Translationprocess>("translationProcess_asyncoperationid", this.translationProcess_asyncoperationid);
        writer.writeCollectionOfObjectValues<Fileattachment>("workflowlog_FileAttachments", this.workflowlog_FileAttachments);
        writer.writeStringValue("workflowlogid", this.workflowlogid);
    };
    /**
     * Gets the stagename property value. 
     * @returns a string
     */
    public get stagename() {
        return this._stagename;
    };
    /**
     * Sets the stagename property value. 
     * @param value Value to set for the stagename property.
     */
    public set stagename(value: string | undefined) {
        this._stagename = value;
    };
    /**
     * Gets the startedon property value. 
     * @returns a Date
     */
    public get startedon() {
        return this._startedon;
    };
    /**
     * Sets the startedon property value. 
     * @param value Value to set for the startedon property.
     */
    public set startedon(value: Date | undefined) {
        this._startedon = value;
    };
    /**
     * Gets the status property value. 
     * @returns a integer
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: number | undefined) {
        this._status = value;
    };
    /**
     * Gets the stepname property value. 
     * @returns a string
     */
    public get stepname() {
        return this._stepname;
    };
    /**
     * Sets the stepname property value. 
     * @param value Value to set for the stepname property.
     */
    public set stepname(value: string | undefined) {
        this._stepname = value;
    };
    /**
     * Gets the translationProcess_asyncoperationid property value. 
     * @returns a translationprocess
     */
    public get translationProcess_asyncoperationid() {
        return this._translationProcess_asyncoperationid;
    };
    /**
     * Sets the translationProcess_asyncoperationid property value. 
     * @param value Value to set for the TranslationProcess_asyncoperationid property.
     */
    public set translationProcess_asyncoperationid(value: Translationprocess | undefined) {
        this._translationProcess_asyncoperationid = value;
    };
    /**
     * Gets the workflowlog_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get workflowlog_FileAttachments() {
        return this._workflowlog_FileAttachments;
    };
    /**
     * Sets the workflowlog_FileAttachments property value. 
     * @param value Value to set for the workflowlog_FileAttachments property.
     */
    public set workflowlog_FileAttachments(value: Fileattachment[] | undefined) {
        this._workflowlog_FileAttachments = value;
    };
    /**
     * Gets the workflowlogid property value. 
     * @returns a string
     */
    public get workflowlogid() {
        return this._workflowlogid;
    };
    /**
     * Sets the workflowlogid property value. 
     * @param value Value to set for the workflowlogid property.
     */
    public set workflowlogid(value: string | undefined) {
        this._workflowlogid = value;
    };
}
