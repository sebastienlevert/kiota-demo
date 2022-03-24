import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aimodelFromDiscriminatorValue} from './createMsdyn_aimodelFromDiscriminatorValue';
import {createMsdyn_assignmentconfigurationstepFromDiscriminatorValue} from './createMsdyn_assignmentconfigurationstepFromDiscriminatorValue';
import {createMsdyn_decisioncontractFromDiscriminatorValue} from './createMsdyn_decisioncontractFromDiscriminatorValue';
import {createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue} from './createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue';
import {createMsdyn_routingconfigurationstepFromDiscriminatorValue} from './createMsdyn_routingconfigurationstepFromDiscriminatorValue';
import {createMsdyn_rulesetdependencymappingFromDiscriminatorValue} from './createMsdyn_rulesetdependencymappingFromDiscriminatorValue';
import {createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue} from './createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_aimodel, Msdyn_assignmentconfigurationstep, Msdyn_decisioncontract, Msdyn_masterentityroutingconfiguration, Msdyn_routingconfigurationstep, Msdyn_rulesetdependencymapping, Msdyn_unifiedroutingdiagnostic, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_decisionruleset extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_aibmodelid_value?: string | undefined;
    private __msdyn_inputcontractid_value?: string | undefined;
    private __msdyn_outputcontractid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_aibmodelid?: Msdyn_aimodel | undefined;
    private _msdyn_authoringmode?: number | undefined;
    private _msdyn_decisionruleset_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_decisionruleset_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_decisionruleset_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_decisionruleset_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_decisionruleset_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid?: Msdyn_assignmentconfigurationstep[] | undefined;
    private _msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid?: Msdyn_routingconfigurationstep[] | undefined;
    private _msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_decisionruleset_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_decisionruleset_ProcessSession?: Processsession[] | undefined;
    private _msdyn_decisionruleset_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_decisionrulesetid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_inputcontractid?: Msdyn_decisioncontract | undefined;
    private _msdyn_isinputcollection?: boolean | undefined;
    private _msdyn_mlmodeltype?: number | undefined;
    private _msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid?: Msdyn_masterentityroutingconfiguration[] | undefined;
    private _msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid?: Msdyn_unifiedroutingdiagnostic[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_outputcontractid?: Msdyn_decisioncontract | undefined;
    private _msdyn_rulesetdefinition?: string | undefined;
    private _msdyn_rulesettype?: number | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _msdyn_aibmodelid_value property value. 
     * @returns a string
     */
    public get _msdyn_aibmodelid_value() {
        return this.__msdyn_aibmodelid_value;
    };
    /**
     * Sets the _msdyn_aibmodelid_value property value. 
     * @param value Value to set for the _msdyn_aibmodelid_value property.
     */
    public set _msdyn_aibmodelid_value(value: string | undefined) {
        this.__msdyn_aibmodelid_value = value;
    };
    /**
     * Gets the _msdyn_inputcontractid_value property value. 
     * @returns a string
     */
    public get _msdyn_inputcontractid_value() {
        return this.__msdyn_inputcontractid_value;
    };
    /**
     * Sets the _msdyn_inputcontractid_value property value. 
     * @param value Value to set for the _msdyn_inputcontractid_value property.
     */
    public set _msdyn_inputcontractid_value(value: string | undefined) {
        this.__msdyn_inputcontractid_value = value;
    };
    /**
     * Gets the _msdyn_outputcontractid_value property value. 
     * @returns a string
     */
    public get _msdyn_outputcontractid_value() {
        return this.__msdyn_outputcontractid_value;
    };
    /**
     * Sets the _msdyn_outputcontractid_value property value. 
     * @param value Value to set for the _msdyn_outputcontractid_value property.
     */
    public set _msdyn_outputcontractid_value(value: string | undefined) {
        this.__msdyn_outputcontractid_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new msdyn_decisionruleset and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_aibmodelid_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._msdyn_aibmodelid_value = n.getStringValue(); },
            "_msdyn_inputcontractid_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._msdyn_inputcontractid_value = n.getStringValue(); },
            "_msdyn_outputcontractid_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._msdyn_outputcontractid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_decisionruleset)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_decisionruleset).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_decisionruleset).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_decisionruleset).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_decisionruleset).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_decisionruleset).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_decisionruleset).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_decisionruleset).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_decisionruleset).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_decisionruleset).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_decisionruleset).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_decisionruleset).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aibmodelid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_aibmodelid = n.getObjectValue<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_authoringmode": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_authoringmode = n.getNumberValue(); },
            "msdyn_decisionruleset_AsyncOperations": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_decisionruleset_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_decisionruleset_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_decisionruleset_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_decisionruleset_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid = n.getCollectionOfObjectValues<Msdyn_assignmentconfigurationstep>(createMsdyn_assignmentconfigurationstepFromDiscriminatorValue); },
            "msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid = n.getCollectionOfObjectValues<Msdyn_routingconfigurationstep>(createMsdyn_routingconfigurationstepFromDiscriminatorValue); },
            "msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_decisionruleset_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_decisionruleset_ProcessSession": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_decisionruleset_SyncErrors": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionruleset_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_decisionrulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_decisionrulesetid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_description = n.getStringValue(); },
            "msdyn_inputcontractid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_inputcontractid = n.getObjectValue<Msdyn_decisioncontract>(createMsdyn_decisioncontractFromDiscriminatorValue); },
            "msdyn_isinputcollection": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_isinputcollection = n.getBooleanValue(); },
            "msdyn_mlmodeltype": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_mlmodeltype = n.getNumberValue(); },
            "msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid = n.getCollectionOfObjectValues<Msdyn_masterentityroutingconfiguration>(createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue); },
            "msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid = n.getCollectionOfObjectValues<Msdyn_unifiedroutingdiagnostic>(createMsdyn_unifiedroutingdiagnosticFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_name = n.getStringValue(); },
            "msdyn_outputcontractid": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_outputcontractid = n.getObjectValue<Msdyn_decisioncontract>(createMsdyn_decisioncontractFromDiscriminatorValue); },
            "msdyn_rulesetdefinition": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_rulesetdefinition = n.getStringValue(); },
            "msdyn_rulesettype": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_rulesettype = n.getNumberValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_decisionruleset).msdyn_uniquename = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_decisionruleset).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_decisionruleset).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_decisionruleset).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_decisionruleset).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_decisionruleset).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_decisionruleset).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_decisionruleset).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_decisionruleset).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_decisionruleset).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_decisionruleset).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_decisionruleset).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_decisionruleset).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_aibmodelid property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_aibmodelid() {
        return this._msdyn_aibmodelid;
    };
    /**
     * Sets the msdyn_aibmodelid property value. 
     * @param value Value to set for the msdyn_aibmodelid property.
     */
    public set msdyn_aibmodelid(value: Msdyn_aimodel | undefined) {
        this._msdyn_aibmodelid = value;
    };
    /**
     * Gets the msdyn_authoringmode property value. 
     * @returns a integer
     */
    public get msdyn_authoringmode() {
        return this._msdyn_authoringmode;
    };
    /**
     * Sets the msdyn_authoringmode property value. 
     * @param value Value to set for the msdyn_authoringmode property.
     */
    public set msdyn_authoringmode(value: number | undefined) {
        this._msdyn_authoringmode = value;
    };
    /**
     * Gets the msdyn_decisionruleset_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_decisionruleset_AsyncOperations() {
        return this._msdyn_decisionruleset_AsyncOperations;
    };
    /**
     * Sets the msdyn_decisionruleset_AsyncOperations property value. 
     * @param value Value to set for the msdyn_decisionruleset_AsyncOperations property.
     */
    public set msdyn_decisionruleset_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_decisionruleset_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_decisionruleset_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_decisionruleset_BulkDeleteFailures() {
        return this._msdyn_decisionruleset_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_decisionruleset_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_decisionruleset_BulkDeleteFailures property.
     */
    public set msdyn_decisionruleset_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_decisionruleset_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_decisionruleset_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_decisionruleset_DuplicateBaseRecord() {
        return this._msdyn_decisionruleset_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_decisionruleset_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_decisionruleset_DuplicateBaseRecord property.
     */
    public set msdyn_decisionruleset_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_decisionruleset_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_decisionruleset_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_decisionruleset_DuplicateMatchingRecord() {
        return this._msdyn_decisionruleset_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_decisionruleset_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_decisionruleset_DuplicateMatchingRecord property.
     */
    public set msdyn_decisionruleset_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_decisionruleset_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_decisionruleset_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_decisionruleset_MailboxTrackingFolders() {
        return this._msdyn_decisionruleset_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_decisionruleset_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_decisionruleset_MailboxTrackingFolders property.
     */
    public set msdyn_decisionruleset_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_decisionruleset_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid property value. 
     * @returns a msdyn_assignmentconfigurationstep
     */
    public get msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid() {
        return this._msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid;
    };
    /**
     * Sets the msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid property value. 
     * @param value Value to set for the msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid property.
     */
    public set msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid(value: Msdyn_assignmentconfigurationstep[] | undefined) {
        this._msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid = value;
    };
    /**
     * Gets the msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid property value. 
     * @returns a msdyn_routingconfigurationstep
     */
    public get msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid() {
        return this._msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid;
    };
    /**
     * Sets the msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid property value. 
     * @param value Value to set for the msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid property.
     */
    public set msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid(value: Msdyn_routingconfigurationstep[] | undefined) {
        this._msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid = value;
    };
    /**
     * Gets the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid() {
        return this._msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid;
    };
    /**
     * Sets the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @param value Value to set for the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property.
     */
    public set msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = value;
    };
    /**
     * Gets the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid() {
        return this._msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid;
    };
    /**
     * Sets the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid property value. 
     * @param value Value to set for the msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid property.
     */
    public set msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid = value;
    };
    /**
     * Gets the msdyn_decisionruleset_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_decisionruleset_PrincipalObjectAttributeAccesses() {
        return this._msdyn_decisionruleset_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_decisionruleset_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_decisionruleset_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_decisionruleset_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_decisionruleset_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_decisionruleset_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_decisionruleset_ProcessSession() {
        return this._msdyn_decisionruleset_ProcessSession;
    };
    /**
     * Sets the msdyn_decisionruleset_ProcessSession property value. 
     * @param value Value to set for the msdyn_decisionruleset_ProcessSession property.
     */
    public set msdyn_decisionruleset_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_decisionruleset_ProcessSession = value;
    };
    /**
     * Gets the msdyn_decisionruleset_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_decisionruleset_SyncErrors() {
        return this._msdyn_decisionruleset_SyncErrors;
    };
    /**
     * Sets the msdyn_decisionruleset_SyncErrors property value. 
     * @param value Value to set for the msdyn_decisionruleset_SyncErrors property.
     */
    public set msdyn_decisionruleset_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_decisionruleset_SyncErrors = value;
    };
    /**
     * Gets the msdyn_decisionrulesetid property value. 
     * @returns a string
     */
    public get msdyn_decisionrulesetid() {
        return this._msdyn_decisionrulesetid;
    };
    /**
     * Sets the msdyn_decisionrulesetid property value. 
     * @param value Value to set for the msdyn_decisionrulesetid property.
     */
    public set msdyn_decisionrulesetid(value: string | undefined) {
        this._msdyn_decisionrulesetid = value;
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
     * Gets the msdyn_inputcontractid property value. 
     * @returns a msdyn_decisioncontract
     */
    public get msdyn_inputcontractid() {
        return this._msdyn_inputcontractid;
    };
    /**
     * Sets the msdyn_inputcontractid property value. 
     * @param value Value to set for the msdyn_inputcontractid property.
     */
    public set msdyn_inputcontractid(value: Msdyn_decisioncontract | undefined) {
        this._msdyn_inputcontractid = value;
    };
    /**
     * Gets the msdyn_isinputcollection property value. 
     * @returns a boolean
     */
    public get msdyn_isinputcollection() {
        return this._msdyn_isinputcollection;
    };
    /**
     * Sets the msdyn_isinputcollection property value. 
     * @param value Value to set for the msdyn_isinputcollection property.
     */
    public set msdyn_isinputcollection(value: boolean | undefined) {
        this._msdyn_isinputcollection = value;
    };
    /**
     * Gets the msdyn_mlmodeltype property value. 
     * @returns a integer
     */
    public get msdyn_mlmodeltype() {
        return this._msdyn_mlmodeltype;
    };
    /**
     * Sets the msdyn_mlmodeltype property value. 
     * @param value Value to set for the msdyn_mlmodeltype property.
     */
    public set msdyn_mlmodeltype(value: number | undefined) {
        this._msdyn_mlmodeltype = value;
    };
    /**
     * Gets the msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid property value. 
     * @returns a msdyn_masterentityroutingconfiguration
     */
    public get msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid() {
        return this._msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid;
    };
    /**
     * Sets the msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid property value. 
     * @param value Value to set for the msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid property.
     */
    public set msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid(value: Msdyn_masterentityroutingconfiguration[] | undefined) {
        this._msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid = value;
    };
    /**
     * Gets the msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid property value. 
     * @returns a msdyn_unifiedroutingdiagnostic
     */
    public get msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid() {
        return this._msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid;
    };
    /**
     * Sets the msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid property value. 
     * @param value Value to set for the msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid property.
     */
    public set msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid(value: Msdyn_unifiedroutingdiagnostic[] | undefined) {
        this._msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid = value;
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
     * Gets the msdyn_outputcontractid property value. 
     * @returns a msdyn_decisioncontract
     */
    public get msdyn_outputcontractid() {
        return this._msdyn_outputcontractid;
    };
    /**
     * Sets the msdyn_outputcontractid property value. 
     * @param value Value to set for the msdyn_outputcontractid property.
     */
    public set msdyn_outputcontractid(value: Msdyn_decisioncontract | undefined) {
        this._msdyn_outputcontractid = value;
    };
    /**
     * Gets the msdyn_rulesetdefinition property value. 
     * @returns a string
     */
    public get msdyn_rulesetdefinition() {
        return this._msdyn_rulesetdefinition;
    };
    /**
     * Sets the msdyn_rulesetdefinition property value. 
     * @param value Value to set for the msdyn_rulesetdefinition property.
     */
    public set msdyn_rulesetdefinition(value: string | undefined) {
        this._msdyn_rulesetdefinition = value;
    };
    /**
     * Gets the msdyn_rulesettype property value. 
     * @returns a integer
     */
    public get msdyn_rulesettype() {
        return this._msdyn_rulesettype;
    };
    /**
     * Sets the msdyn_rulesettype property value. 
     * @param value Value to set for the msdyn_rulesettype property.
     */
    public set msdyn_rulesettype(value: number | undefined) {
        this._msdyn_rulesettype = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_msdyn_aibmodelid_value", this._msdyn_aibmodelid_value);
        writer.writeStringValue("_msdyn_inputcontractid_value", this._msdyn_inputcontractid_value);
        writer.writeStringValue("_msdyn_outputcontractid_value", this._msdyn_outputcontractid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_aimodel>("msdyn_aibmodelid", this.msdyn_aibmodelid);
        writer.writeNumberValue("msdyn_authoringmode", this.msdyn_authoringmode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_decisionruleset_AsyncOperations", this.msdyn_decisionruleset_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_decisionruleset_BulkDeleteFailures", this.msdyn_decisionruleset_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_decisionruleset_DuplicateBaseRecord", this.msdyn_decisionruleset_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_decisionruleset_DuplicateMatchingRecord", this.msdyn_decisionruleset_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_decisionruleset_MailboxTrackingFolders", this.msdyn_decisionruleset_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_assignmentconfigurationstep>("msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid", this.msdyn_decisionruleset_msdyn_assignmentconfigurationstep_rulesetid);
        writer.writeCollectionOfObjectValues<Msdyn_routingconfigurationstep>("msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid", this.msdyn_decisionruleset_msdyn_routingconfigurationstep_rulesetid);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid", this.msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid", this.msdyn_decisionruleset_msdyn_rulesetdependencymapping_msdyn_referencingrulesetid);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_decisionruleset_PrincipalObjectAttributeAccesses", this.msdyn_decisionruleset_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_decisionruleset_ProcessSession", this.msdyn_decisionruleset_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_decisionruleset_SyncErrors", this.msdyn_decisionruleset_SyncErrors);
        writer.writeStringValue("msdyn_decisionrulesetid", this.msdyn_decisionrulesetid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_decisioncontract>("msdyn_inputcontractid", this.msdyn_inputcontractid);
        writer.writeBooleanValue("msdyn_isinputcollection", this.msdyn_isinputcollection);
        writer.writeNumberValue("msdyn_mlmodeltype", this.msdyn_mlmodeltype);
        writer.writeCollectionOfObjectValues<Msdyn_masterentityroutingconfiguration>("msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid", this.msdyn_msdyn_decisionruleset_msdyn_masterentityroutingconfiguration_rulesetid);
        writer.writeCollectionOfObjectValues<Msdyn_unifiedroutingdiagnostic>("msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid", this.msdyn_msdyn_decisionruleset_msdyn_unifiedroutingdiagnostic_decisionrulesetid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_decisioncontract>("msdyn_outputcontractid", this.msdyn_outputcontractid);
        writer.writeStringValue("msdyn_rulesetdefinition", this.msdyn_rulesetdefinition);
        writer.writeNumberValue("msdyn_rulesettype", this.msdyn_rulesettype);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
