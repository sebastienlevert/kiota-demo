import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_solutionhealthruleargumentFromDiscriminatorValue} from './createMsdyn_solutionhealthruleargumentFromDiscriminatorValue';
import {createMsdyn_solutionhealthrulesetFromDiscriminatorValue} from './createMsdyn_solutionhealthrulesetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_solutionhealthruleargument, Msdyn_solutionhealthruleset, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_solutionhealthrule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_resolutionaction_value?: string | undefined;
    private __msdyn_solutionhealthrulesetid_value?: string | undefined;
    private __msdyn_workflow_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_componenttype?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule?: Msdyn_solutionhealthruleargument[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_owningsolutionid?: string | undefined;
    private _msdyn_resolutionaction?: Workflow | undefined;
    private _msdyn_resolutionmessage?: string | undefined;
    private _msdyn_resolutiontype?: number | undefined;
    private _msdyn_solutionhealthrule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_solutionhealthrule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_solutionhealthrule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_solutionhealthrule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_solutionhealthrule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_solutionhealthrule_ProcessSession?: Processsession[] | undefined;
    private _msdyn_solutionhealthrule_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_solutionhealthruleid?: string | undefined;
    private _msdyn_solutionhealthrulesetId?: Msdyn_solutionhealthruleset | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _msdyn_Workflow?: Workflow | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _msdyn_resolutionaction_value property value. 
     * @returns a string
     */
    public get _msdyn_resolutionaction_value() {
        return this.__msdyn_resolutionaction_value;
    };
    /**
     * Sets the _msdyn_resolutionaction_value property value. 
     * @param value Value to set for the _msdyn_resolutionaction_value property.
     */
    public set _msdyn_resolutionaction_value(value: string | undefined) {
        this.__msdyn_resolutionaction_value = value;
    };
    /**
     * Gets the _msdyn_solutionhealthrulesetid_value property value. 
     * @returns a string
     */
    public get _msdyn_solutionhealthrulesetid_value() {
        return this.__msdyn_solutionhealthrulesetid_value;
    };
    /**
     * Sets the _msdyn_solutionhealthrulesetid_value property value. 
     * @param value Value to set for the _msdyn_solutionhealthrulesetid_value property.
     */
    public set _msdyn_solutionhealthrulesetid_value(value: string | undefined) {
        this.__msdyn_solutionhealthrulesetid_value = value;
    };
    /**
     * Gets the _msdyn_workflow_value property value. 
     * @returns a string
     */
    public get _msdyn_workflow_value() {
        return this.__msdyn_workflow_value;
    };
    /**
     * Sets the _msdyn_workflow_value property value. 
     * @param value Value to set for the _msdyn_workflow_value property.
     */
    public set _msdyn_workflow_value(value: string | undefined) {
        this.__msdyn_workflow_value = value;
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
     * Instantiates a new msdyn_solutionhealthrule and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_resolutionaction_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._msdyn_resolutionaction_value = n.getStringValue(); },
            "_msdyn_solutionhealthrulesetid_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._msdyn_solutionhealthrulesetid_value = n.getStringValue(); },
            "_msdyn_workflow_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._msdyn_workflow_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_solutionhealthrule)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_componenttype": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_componenttype = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_description = n.getStringValue(); },
            "msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule = n.getCollectionOfObjectValues<Msdyn_solutionhealthruleargument>(createMsdyn_solutionhealthruleargumentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_name = n.getStringValue(); },
            "msdyn_owningsolutionid": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_owningsolutionid = n.getStringValue(); },
            "msdyn_resolutionaction": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_resolutionaction = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "msdyn_resolutionmessage": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_resolutionmessage = n.getStringValue(); },
            "msdyn_resolutiontype": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_resolutiontype = n.getNumberValue(); },
            "msdyn_solutionhealthrule_AsyncOperations": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_ProcessSession": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_solutionhealthrule_SyncErrors": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_solutionhealthruleid": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthruleid = n.getStringValue(); },
            "msdyn_solutionhealthrulesetId": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_solutionhealthrulesetId = n.getObjectValue<Msdyn_solutionhealthruleset>(createMsdyn_solutionhealthrulesetFromDiscriminatorValue); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_uniquename = n.getStringValue(); },
            "msdyn_Workflow": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).msdyn_Workflow = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_solutionhealthrule).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the msdyn_componenttype property value. 
     * @returns a string
     */
    public get msdyn_componenttype() {
        return this._msdyn_componenttype;
    };
    /**
     * Sets the msdyn_componenttype property value. 
     * @param value Value to set for the msdyn_componenttype property.
     */
    public set msdyn_componenttype(value: string | undefined) {
        this._msdyn_componenttype = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule property value. 
     * @returns a msdyn_solutionhealthruleargument
     */
    public get msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule() {
        return this._msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule;
    };
    /**
     * Sets the msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule property value. 
     * @param value Value to set for the msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule property.
     */
    public set msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule(value: Msdyn_solutionhealthruleargument[] | undefined) {
        this._msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_owningsolutionid property value. 
     * @returns a string
     */
    public get msdyn_owningsolutionid() {
        return this._msdyn_owningsolutionid;
    };
    /**
     * Sets the msdyn_owningsolutionid property value. 
     * @param value Value to set for the msdyn_owningsolutionid property.
     */
    public set msdyn_owningsolutionid(value: string | undefined) {
        this._msdyn_owningsolutionid = value;
    };
    /**
     * Gets the msdyn_resolutionaction property value. 
     * @returns a workflow
     */
    public get msdyn_resolutionaction() {
        return this._msdyn_resolutionaction;
    };
    /**
     * Sets the msdyn_resolutionaction property value. 
     * @param value Value to set for the msdyn_resolutionaction property.
     */
    public set msdyn_resolutionaction(value: Workflow | undefined) {
        this._msdyn_resolutionaction = value;
    };
    /**
     * Gets the msdyn_resolutionmessage property value. 
     * @returns a string
     */
    public get msdyn_resolutionmessage() {
        return this._msdyn_resolutionmessage;
    };
    /**
     * Sets the msdyn_resolutionmessage property value. 
     * @param value Value to set for the msdyn_resolutionmessage property.
     */
    public set msdyn_resolutionmessage(value: string | undefined) {
        this._msdyn_resolutionmessage = value;
    };
    /**
     * Gets the msdyn_resolutiontype property value. 
     * @returns a integer
     */
    public get msdyn_resolutiontype() {
        return this._msdyn_resolutiontype;
    };
    /**
     * Sets the msdyn_resolutiontype property value. 
     * @param value Value to set for the msdyn_resolutiontype property.
     */
    public set msdyn_resolutiontype(value: number | undefined) {
        this._msdyn_resolutiontype = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_solutionhealthrule_AsyncOperations() {
        return this._msdyn_solutionhealthrule_AsyncOperations;
    };
    /**
     * Sets the msdyn_solutionhealthrule_AsyncOperations property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_AsyncOperations property.
     */
    public set msdyn_solutionhealthrule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_solutionhealthrule_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_solutionhealthrule_BulkDeleteFailures() {
        return this._msdyn_solutionhealthrule_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_solutionhealthrule_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_BulkDeleteFailures property.
     */
    public set msdyn_solutionhealthrule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_solutionhealthrule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_solutionhealthrule_DuplicateBaseRecord() {
        return this._msdyn_solutionhealthrule_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_solutionhealthrule_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_DuplicateBaseRecord property.
     */
    public set msdyn_solutionhealthrule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_solutionhealthrule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_solutionhealthrule_DuplicateMatchingRecord() {
        return this._msdyn_solutionhealthrule_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_solutionhealthrule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_DuplicateMatchingRecord property.
     */
    public set msdyn_solutionhealthrule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_solutionhealthrule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_solutionhealthrule_MailboxTrackingFolders() {
        return this._msdyn_solutionhealthrule_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_solutionhealthrule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_MailboxTrackingFolders property.
     */
    public set msdyn_solutionhealthrule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_solutionhealthrule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses() {
        return this._msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_solutionhealthrule_ProcessSession() {
        return this._msdyn_solutionhealthrule_ProcessSession;
    };
    /**
     * Sets the msdyn_solutionhealthrule_ProcessSession property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_ProcessSession property.
     */
    public set msdyn_solutionhealthrule_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_solutionhealthrule_ProcessSession = value;
    };
    /**
     * Gets the msdyn_solutionhealthrule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_solutionhealthrule_SyncErrors() {
        return this._msdyn_solutionhealthrule_SyncErrors;
    };
    /**
     * Sets the msdyn_solutionhealthrule_SyncErrors property value. 
     * @param value Value to set for the msdyn_solutionhealthrule_SyncErrors property.
     */
    public set msdyn_solutionhealthrule_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_solutionhealthrule_SyncErrors = value;
    };
    /**
     * Gets the msdyn_solutionhealthruleid property value. 
     * @returns a string
     */
    public get msdyn_solutionhealthruleid() {
        return this._msdyn_solutionhealthruleid;
    };
    /**
     * Sets the msdyn_solutionhealthruleid property value. 
     * @param value Value to set for the msdyn_solutionhealthruleid property.
     */
    public set msdyn_solutionhealthruleid(value: string | undefined) {
        this._msdyn_solutionhealthruleid = value;
    };
    /**
     * Gets the msdyn_solutionhealthrulesetId property value. 
     * @returns a msdyn_solutionhealthruleset
     */
    public get msdyn_solutionhealthrulesetId() {
        return this._msdyn_solutionhealthrulesetId;
    };
    /**
     * Sets the msdyn_solutionhealthrulesetId property value. 
     * @param value Value to set for the msdyn_solutionhealthrulesetId property.
     */
    public set msdyn_solutionhealthrulesetId(value: Msdyn_solutionhealthruleset | undefined) {
        this._msdyn_solutionhealthrulesetId = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
    };
    /**
     * Gets the msdyn_Workflow property value. 
     * @returns a workflow
     */
    public get msdyn_Workflow() {
        return this._msdyn_Workflow;
    };
    /**
     * Sets the msdyn_Workflow property value. 
     * @param value Value to set for the msdyn_Workflow property.
     */
    public set msdyn_Workflow(value: Workflow | undefined) {
        this._msdyn_Workflow = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
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
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_resolutionaction_value", this._msdyn_resolutionaction_value);
        writer.writeStringValue("_msdyn_solutionhealthrulesetid_value", this._msdyn_solutionhealthrulesetid_value);
        writer.writeStringValue("_msdyn_workflow_value", this._msdyn_workflow_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_componenttype", this.msdyn_componenttype);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeCollectionOfObjectValues<Msdyn_solutionhealthruleargument>("msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule", this.msdyn_msdyn_solutionhealthrule_msdyn_solutionhealthruleargument_SolutionHealthRule);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_owningsolutionid", this.msdyn_owningsolutionid);
        writer.writeObjectValue<Workflow>("msdyn_resolutionaction", this.msdyn_resolutionaction);
        writer.writeStringValue("msdyn_resolutionmessage", this.msdyn_resolutionmessage);
        writer.writeNumberValue("msdyn_resolutiontype", this.msdyn_resolutiontype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_solutionhealthrule_AsyncOperations", this.msdyn_solutionhealthrule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_solutionhealthrule_BulkDeleteFailures", this.msdyn_solutionhealthrule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_solutionhealthrule_DuplicateBaseRecord", this.msdyn_solutionhealthrule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_solutionhealthrule_DuplicateMatchingRecord", this.msdyn_solutionhealthrule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_solutionhealthrule_MailboxTrackingFolders", this.msdyn_solutionhealthrule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses", this.msdyn_solutionhealthrule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_solutionhealthrule_ProcessSession", this.msdyn_solutionhealthrule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_solutionhealthrule_SyncErrors", this.msdyn_solutionhealthrule_SyncErrors);
        writer.writeStringValue("msdyn_solutionhealthruleid", this.msdyn_solutionhealthruleid);
        writer.writeObjectValue<Msdyn_solutionhealthruleset>("msdyn_solutionhealthrulesetId", this.msdyn_solutionhealthrulesetId);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeObjectValue<Workflow>("msdyn_Workflow", this.msdyn_Workflow);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
