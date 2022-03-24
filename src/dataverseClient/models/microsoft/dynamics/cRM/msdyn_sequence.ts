import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_salestagFromDiscriminatorValue} from './createMsdyn_salestagFromDiscriminatorValue';
import {createMsdyn_segmentFromDiscriminatorValue} from './createMsdyn_segmentFromDiscriminatorValue';
import {createMsdyn_sequenceFromDiscriminatorValue} from './createMsdyn_sequenceFromDiscriminatorValue';
import {createMsdyn_sequencestatFromDiscriminatorValue} from './createMsdyn_sequencestatFromDiscriminatorValue';
import {createMsdyn_sequencetargetFromDiscriminatorValue} from './createMsdyn_sequencetargetFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_salestag, Msdyn_segment, Msdyn_sequencestat, Msdyn_sequencetarget, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sequence extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_parentsequence_value?: string | undefined;
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
    private _msdyn_cjodefinition?: string | undefined;
    private _msdyn_cjodefinitionstate?: boolean | undefined;
    private _msdyn_definition?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_maxstepcount?: number | undefined;
    private _msdyn_msdyn_sequence_msdyn_segment_Sequence?: Msdyn_segment[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_orchestratorversion?: number | undefined;
    private _msdyn_ParentSequence?: Msdyn_sequence | undefined;
    private _msdyn_regardingentitydisplayname?: string | undefined;
    private _msdyn_regardingentityname?: string | undefined;
    private _msdyn_salestag_msdyn_sequence?: Msdyn_salestag[] | undefined;
    private _msdyn_sequence_appliedsequenceinstance?: Msdyn_sequencetarget[] | undefined;
    private _msdyn_sequence_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sequence_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sequence_connections1?: Connection[] | undefined;
    private _msdyn_sequence_connections2?: Connection[] | undefined;
    private _msdyn_sequence_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sequence_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sequence_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sequence_parentsequence?: Msdyn_sequence[] | undefined;
    private _msdyn_sequence_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sequence_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sequence_sequencestat?: Msdyn_sequencestat[] | undefined;
    private _msdyn_sequence_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sequenceexitcriterion?: string | undefined;
    private _msdyn_sequenceid?: string | undefined;
    private _msdyn_sequenceparent?: Msdyn_sequencetarget[] | undefined;
    private _msdyn_sequencerecords?: string | undefined;
    private _msdyn_SequenceStats180d?: string | undefined;
    private _msdyn_SequenceStats1y?: string | undefined;
    private _msdyn_SequenceStats2y?: string | undefined;
    private _msdyn_SequenceStats30d?: string | undefined;
    private _msdyn_SequenceStats90d?: string | undefined;
    private _msdyn_totaltasks?: number | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_version?: number | undefined;
    private _msdyn_versiondescription?: string | undefined;
    private _msdyn_workflowid?: string | undefined;
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
     * Gets the _msdyn_parentsequence_value property value. 
     * @returns a string
     */
    public get _msdyn_parentsequence_value() {
        return this.__msdyn_parentsequence_value;
    };
    /**
     * Sets the _msdyn_parentsequence_value property value. 
     * @param value Value to set for the _msdyn_parentsequence_value property.
     */
    public set _msdyn_parentsequence_value(value: string | undefined) {
        this.__msdyn_parentsequence_value = value;
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
     * Instantiates a new msdyn_sequence and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sequence)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequence)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sequence)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequence)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_parentsequence_value": (o, n) => { (o as unknown as Msdyn_sequence)._msdyn_parentsequence_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sequence)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sequence)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sequence)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sequence)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sequence).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sequence).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sequence).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sequence).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sequence).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sequence).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sequence).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_cjodefinition": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_cjodefinition = n.getStringValue(); },
            "msdyn_cjodefinitionstate": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_cjodefinitionstate = n.getBooleanValue(); },
            "msdyn_definition": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_definition = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_description = n.getStringValue(); },
            "msdyn_maxstepcount": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_maxstepcount = n.getNumberValue(); },
            "msdyn_msdyn_sequence_msdyn_segment_Sequence": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_msdyn_sequence_msdyn_segment_Sequence = n.getCollectionOfObjectValues<Msdyn_segment>(createMsdyn_segmentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_name = n.getStringValue(); },
            "msdyn_orchestratorversion": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_orchestratorversion = n.getNumberValue(); },
            "msdyn_ParentSequence": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_ParentSequence = n.getObjectValue<Msdyn_sequence>(createMsdyn_sequenceFromDiscriminatorValue); },
            "msdyn_regardingentitydisplayname": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_regardingentitydisplayname = n.getStringValue(); },
            "msdyn_regardingentityname": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_regardingentityname = n.getStringValue(); },
            "msdyn_salestag_msdyn_sequence": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_salestag_msdyn_sequence = n.getCollectionOfObjectValues<Msdyn_salestag>(createMsdyn_salestagFromDiscriminatorValue); },
            "msdyn_sequence_appliedsequenceinstance": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_appliedsequenceinstance = n.getCollectionOfObjectValues<Msdyn_sequencetarget>(createMsdyn_sequencetargetFromDiscriminatorValue); },
            "msdyn_sequence_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sequence_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sequence_connections1": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_sequence_connections2": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_sequence_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sequence_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sequence_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sequence_parentsequence": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_parentsequence = n.getCollectionOfObjectValues<Msdyn_sequence>(createMsdyn_sequenceFromDiscriminatorValue); },
            "msdyn_sequence_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sequence_ProcessSession": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sequence_sequencestat": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_sequencestat = n.getCollectionOfObjectValues<Msdyn_sequencestat>(createMsdyn_sequencestatFromDiscriminatorValue); },
            "msdyn_sequence_SyncErrors": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequence_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sequenceexitcriterion": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequenceexitcriterion = n.getStringValue(); },
            "msdyn_sequenceid": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequenceid = n.getStringValue(); },
            "msdyn_sequenceparent": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequenceparent = n.getCollectionOfObjectValues<Msdyn_sequencetarget>(createMsdyn_sequencetargetFromDiscriminatorValue); },
            "msdyn_sequencerecords": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_sequencerecords = n.getStringValue(); },
            "msdyn_SequenceStats180d": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_SequenceStats180d = n.getStringValue(); },
            "msdyn_SequenceStats1y": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_SequenceStats1y = n.getStringValue(); },
            "msdyn_SequenceStats2y": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_SequenceStats2y = n.getStringValue(); },
            "msdyn_SequenceStats30d": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_SequenceStats30d = n.getStringValue(); },
            "msdyn_SequenceStats90d": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_SequenceStats90d = n.getStringValue(); },
            "msdyn_totaltasks": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_totaltasks = n.getNumberValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_type = n.getNumberValue(); },
            "msdyn_version": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_version = n.getNumberValue(); },
            "msdyn_versiondescription": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_versiondescription = n.getStringValue(); },
            "msdyn_workflowid": (o, n) => { (o as unknown as Msdyn_sequence).msdyn_workflowid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sequence).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sequence).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sequence).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sequence).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sequence).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sequence).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sequence).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sequence).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sequence).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sequence).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_cjodefinition property value. 
     * @returns a string
     */
    public get msdyn_cjodefinition() {
        return this._msdyn_cjodefinition;
    };
    /**
     * Sets the msdyn_cjodefinition property value. 
     * @param value Value to set for the msdyn_cjodefinition property.
     */
    public set msdyn_cjodefinition(value: string | undefined) {
        this._msdyn_cjodefinition = value;
    };
    /**
     * Gets the msdyn_cjodefinitionstate property value. 
     * @returns a boolean
     */
    public get msdyn_cjodefinitionstate() {
        return this._msdyn_cjodefinitionstate;
    };
    /**
     * Sets the msdyn_cjodefinitionstate property value. 
     * @param value Value to set for the msdyn_cjodefinitionstate property.
     */
    public set msdyn_cjodefinitionstate(value: boolean | undefined) {
        this._msdyn_cjodefinitionstate = value;
    };
    /**
     * Gets the msdyn_definition property value. 
     * @returns a string
     */
    public get msdyn_definition() {
        return this._msdyn_definition;
    };
    /**
     * Sets the msdyn_definition property value. 
     * @param value Value to set for the msdyn_definition property.
     */
    public set msdyn_definition(value: string | undefined) {
        this._msdyn_definition = value;
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
     * Gets the msdyn_maxstepcount property value. 
     * @returns a integer
     */
    public get msdyn_maxstepcount() {
        return this._msdyn_maxstepcount;
    };
    /**
     * Sets the msdyn_maxstepcount property value. 
     * @param value Value to set for the msdyn_maxstepcount property.
     */
    public set msdyn_maxstepcount(value: number | undefined) {
        this._msdyn_maxstepcount = value;
    };
    /**
     * Gets the msdyn_msdyn_sequence_msdyn_segment_Sequence property value. 
     * @returns a msdyn_segment
     */
    public get msdyn_msdyn_sequence_msdyn_segment_Sequence() {
        return this._msdyn_msdyn_sequence_msdyn_segment_Sequence;
    };
    /**
     * Sets the msdyn_msdyn_sequence_msdyn_segment_Sequence property value. 
     * @param value Value to set for the msdyn_msdyn_sequence_msdyn_segment_Sequence property.
     */
    public set msdyn_msdyn_sequence_msdyn_segment_Sequence(value: Msdyn_segment[] | undefined) {
        this._msdyn_msdyn_sequence_msdyn_segment_Sequence = value;
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
     * Gets the msdyn_orchestratorversion property value. 
     * @returns a integer
     */
    public get msdyn_orchestratorversion() {
        return this._msdyn_orchestratorversion;
    };
    /**
     * Sets the msdyn_orchestratorversion property value. 
     * @param value Value to set for the msdyn_orchestratorversion property.
     */
    public set msdyn_orchestratorversion(value: number | undefined) {
        this._msdyn_orchestratorversion = value;
    };
    /**
     * Gets the msdyn_ParentSequence property value. 
     * @returns a msdyn_sequence
     */
    public get msdyn_ParentSequence() {
        return this._msdyn_ParentSequence;
    };
    /**
     * Sets the msdyn_ParentSequence property value. 
     * @param value Value to set for the msdyn_ParentSequence property.
     */
    public set msdyn_ParentSequence(value: Msdyn_sequence | undefined) {
        this._msdyn_ParentSequence = value;
    };
    /**
     * Gets the msdyn_regardingentitydisplayname property value. 
     * @returns a string
     */
    public get msdyn_regardingentitydisplayname() {
        return this._msdyn_regardingentitydisplayname;
    };
    /**
     * Sets the msdyn_regardingentitydisplayname property value. 
     * @param value Value to set for the msdyn_regardingentitydisplayname property.
     */
    public set msdyn_regardingentitydisplayname(value: string | undefined) {
        this._msdyn_regardingentitydisplayname = value;
    };
    /**
     * Gets the msdyn_regardingentityname property value. 
     * @returns a string
     */
    public get msdyn_regardingentityname() {
        return this._msdyn_regardingentityname;
    };
    /**
     * Sets the msdyn_regardingentityname property value. 
     * @param value Value to set for the msdyn_regardingentityname property.
     */
    public set msdyn_regardingentityname(value: string | undefined) {
        this._msdyn_regardingentityname = value;
    };
    /**
     * Gets the msdyn_salestag_msdyn_sequence property value. 
     * @returns a msdyn_salestag
     */
    public get msdyn_salestag_msdyn_sequence() {
        return this._msdyn_salestag_msdyn_sequence;
    };
    /**
     * Sets the msdyn_salestag_msdyn_sequence property value. 
     * @param value Value to set for the msdyn_salestag_msdyn_sequence property.
     */
    public set msdyn_salestag_msdyn_sequence(value: Msdyn_salestag[] | undefined) {
        this._msdyn_salestag_msdyn_sequence = value;
    };
    /**
     * Gets the msdyn_sequence_appliedsequenceinstance property value. 
     * @returns a msdyn_sequencetarget
     */
    public get msdyn_sequence_appliedsequenceinstance() {
        return this._msdyn_sequence_appliedsequenceinstance;
    };
    /**
     * Sets the msdyn_sequence_appliedsequenceinstance property value. 
     * @param value Value to set for the msdyn_sequence_appliedsequenceinstance property.
     */
    public set msdyn_sequence_appliedsequenceinstance(value: Msdyn_sequencetarget[] | undefined) {
        this._msdyn_sequence_appliedsequenceinstance = value;
    };
    /**
     * Gets the msdyn_sequence_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sequence_AsyncOperations() {
        return this._msdyn_sequence_AsyncOperations;
    };
    /**
     * Sets the msdyn_sequence_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sequence_AsyncOperations property.
     */
    public set msdyn_sequence_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sequence_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sequence_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sequence_BulkDeleteFailures() {
        return this._msdyn_sequence_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sequence_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sequence_BulkDeleteFailures property.
     */
    public set msdyn_sequence_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sequence_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sequence_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_sequence_connections1() {
        return this._msdyn_sequence_connections1;
    };
    /**
     * Sets the msdyn_sequence_connections1 property value. 
     * @param value Value to set for the msdyn_sequence_connections1 property.
     */
    public set msdyn_sequence_connections1(value: Connection[] | undefined) {
        this._msdyn_sequence_connections1 = value;
    };
    /**
     * Gets the msdyn_sequence_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_sequence_connections2() {
        return this._msdyn_sequence_connections2;
    };
    /**
     * Sets the msdyn_sequence_connections2 property value. 
     * @param value Value to set for the msdyn_sequence_connections2 property.
     */
    public set msdyn_sequence_connections2(value: Connection[] | undefined) {
        this._msdyn_sequence_connections2 = value;
    };
    /**
     * Gets the msdyn_sequence_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sequence_DuplicateBaseRecord() {
        return this._msdyn_sequence_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sequence_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sequence_DuplicateBaseRecord property.
     */
    public set msdyn_sequence_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sequence_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sequence_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sequence_DuplicateMatchingRecord() {
        return this._msdyn_sequence_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sequence_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sequence_DuplicateMatchingRecord property.
     */
    public set msdyn_sequence_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sequence_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sequence_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sequence_MailboxTrackingFolders() {
        return this._msdyn_sequence_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sequence_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sequence_MailboxTrackingFolders property.
     */
    public set msdyn_sequence_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sequence_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sequence_parentsequence property value. 
     * @returns a msdyn_sequence
     */
    public get msdyn_sequence_parentsequence() {
        return this._msdyn_sequence_parentsequence;
    };
    /**
     * Sets the msdyn_sequence_parentsequence property value. 
     * @param value Value to set for the msdyn_sequence_parentsequence property.
     */
    public set msdyn_sequence_parentsequence(value: Msdyn_sequence[] | undefined) {
        this._msdyn_sequence_parentsequence = value;
    };
    /**
     * Gets the msdyn_sequence_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sequence_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sequence_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sequence_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sequence_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sequence_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sequence_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sequence_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sequence_ProcessSession() {
        return this._msdyn_sequence_ProcessSession;
    };
    /**
     * Sets the msdyn_sequence_ProcessSession property value. 
     * @param value Value to set for the msdyn_sequence_ProcessSession property.
     */
    public set msdyn_sequence_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sequence_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sequence_sequencestat property value. 
     * @returns a msdyn_sequencestat
     */
    public get msdyn_sequence_sequencestat() {
        return this._msdyn_sequence_sequencestat;
    };
    /**
     * Sets the msdyn_sequence_sequencestat property value. 
     * @param value Value to set for the msdyn_sequence_sequencestat property.
     */
    public set msdyn_sequence_sequencestat(value: Msdyn_sequencestat[] | undefined) {
        this._msdyn_sequence_sequencestat = value;
    };
    /**
     * Gets the msdyn_sequence_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sequence_SyncErrors() {
        return this._msdyn_sequence_SyncErrors;
    };
    /**
     * Sets the msdyn_sequence_SyncErrors property value. 
     * @param value Value to set for the msdyn_sequence_SyncErrors property.
     */
    public set msdyn_sequence_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sequence_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sequenceexitcriterion property value. 
     * @returns a string
     */
    public get msdyn_sequenceexitcriterion() {
        return this._msdyn_sequenceexitcriterion;
    };
    /**
     * Sets the msdyn_sequenceexitcriterion property value. 
     * @param value Value to set for the msdyn_sequenceexitcriterion property.
     */
    public set msdyn_sequenceexitcriterion(value: string | undefined) {
        this._msdyn_sequenceexitcriterion = value;
    };
    /**
     * Gets the msdyn_sequenceid property value. 
     * @returns a string
     */
    public get msdyn_sequenceid() {
        return this._msdyn_sequenceid;
    };
    /**
     * Sets the msdyn_sequenceid property value. 
     * @param value Value to set for the msdyn_sequenceid property.
     */
    public set msdyn_sequenceid(value: string | undefined) {
        this._msdyn_sequenceid = value;
    };
    /**
     * Gets the msdyn_sequenceparent property value. 
     * @returns a msdyn_sequencetarget
     */
    public get msdyn_sequenceparent() {
        return this._msdyn_sequenceparent;
    };
    /**
     * Sets the msdyn_sequenceparent property value. 
     * @param value Value to set for the msdyn_sequenceparent property.
     */
    public set msdyn_sequenceparent(value: Msdyn_sequencetarget[] | undefined) {
        this._msdyn_sequenceparent = value;
    };
    /**
     * Gets the msdyn_sequencerecords property value. 
     * @returns a string
     */
    public get msdyn_sequencerecords() {
        return this._msdyn_sequencerecords;
    };
    /**
     * Sets the msdyn_sequencerecords property value. 
     * @param value Value to set for the msdyn_sequencerecords property.
     */
    public set msdyn_sequencerecords(value: string | undefined) {
        this._msdyn_sequencerecords = value;
    };
    /**
     * Gets the msdyn_SequenceStats180d property value. 
     * @returns a string
     */
    public get msdyn_SequenceStats180d() {
        return this._msdyn_SequenceStats180d;
    };
    /**
     * Sets the msdyn_SequenceStats180d property value. 
     * @param value Value to set for the msdyn_SequenceStats180d property.
     */
    public set msdyn_SequenceStats180d(value: string | undefined) {
        this._msdyn_SequenceStats180d = value;
    };
    /**
     * Gets the msdyn_SequenceStats1y property value. 
     * @returns a string
     */
    public get msdyn_SequenceStats1y() {
        return this._msdyn_SequenceStats1y;
    };
    /**
     * Sets the msdyn_SequenceStats1y property value. 
     * @param value Value to set for the msdyn_SequenceStats1y property.
     */
    public set msdyn_SequenceStats1y(value: string | undefined) {
        this._msdyn_SequenceStats1y = value;
    };
    /**
     * Gets the msdyn_SequenceStats2y property value. 
     * @returns a string
     */
    public get msdyn_SequenceStats2y() {
        return this._msdyn_SequenceStats2y;
    };
    /**
     * Sets the msdyn_SequenceStats2y property value. 
     * @param value Value to set for the msdyn_SequenceStats2y property.
     */
    public set msdyn_SequenceStats2y(value: string | undefined) {
        this._msdyn_SequenceStats2y = value;
    };
    /**
     * Gets the msdyn_SequenceStats30d property value. 
     * @returns a string
     */
    public get msdyn_SequenceStats30d() {
        return this._msdyn_SequenceStats30d;
    };
    /**
     * Sets the msdyn_SequenceStats30d property value. 
     * @param value Value to set for the msdyn_SequenceStats30d property.
     */
    public set msdyn_SequenceStats30d(value: string | undefined) {
        this._msdyn_SequenceStats30d = value;
    };
    /**
     * Gets the msdyn_SequenceStats90d property value. 
     * @returns a string
     */
    public get msdyn_SequenceStats90d() {
        return this._msdyn_SequenceStats90d;
    };
    /**
     * Sets the msdyn_SequenceStats90d property value. 
     * @param value Value to set for the msdyn_SequenceStats90d property.
     */
    public set msdyn_SequenceStats90d(value: string | undefined) {
        this._msdyn_SequenceStats90d = value;
    };
    /**
     * Gets the msdyn_totaltasks property value. 
     * @returns a integer
     */
    public get msdyn_totaltasks() {
        return this._msdyn_totaltasks;
    };
    /**
     * Sets the msdyn_totaltasks property value. 
     * @param value Value to set for the msdyn_totaltasks property.
     */
    public set msdyn_totaltasks(value: number | undefined) {
        this._msdyn_totaltasks = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_version property value. 
     * @returns a integer
     */
    public get msdyn_version() {
        return this._msdyn_version;
    };
    /**
     * Sets the msdyn_version property value. 
     * @param value Value to set for the msdyn_version property.
     */
    public set msdyn_version(value: number | undefined) {
        this._msdyn_version = value;
    };
    /**
     * Gets the msdyn_versiondescription property value. 
     * @returns a string
     */
    public get msdyn_versiondescription() {
        return this._msdyn_versiondescription;
    };
    /**
     * Sets the msdyn_versiondescription property value. 
     * @param value Value to set for the msdyn_versiondescription property.
     */
    public set msdyn_versiondescription(value: string | undefined) {
        this._msdyn_versiondescription = value;
    };
    /**
     * Gets the msdyn_workflowid property value. 
     * @returns a string
     */
    public get msdyn_workflowid() {
        return this._msdyn_workflowid;
    };
    /**
     * Sets the msdyn_workflowid property value. 
     * @param value Value to set for the msdyn_workflowid property.
     */
    public set msdyn_workflowid(value: string | undefined) {
        this._msdyn_workflowid = value;
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
        writer.writeStringValue("_msdyn_parentsequence_value", this._msdyn_parentsequence_value);
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
        writer.writeStringValue("msdyn_cjodefinition", this.msdyn_cjodefinition);
        writer.writeBooleanValue("msdyn_cjodefinitionstate", this.msdyn_cjodefinitionstate);
        writer.writeStringValue("msdyn_definition", this.msdyn_definition);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_maxstepcount", this.msdyn_maxstepcount);
        writer.writeCollectionOfObjectValues<Msdyn_segment>("msdyn_msdyn_sequence_msdyn_segment_Sequence", this.msdyn_msdyn_sequence_msdyn_segment_Sequence);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_orchestratorversion", this.msdyn_orchestratorversion);
        writer.writeObjectValue<Msdyn_sequence>("msdyn_ParentSequence", this.msdyn_ParentSequence);
        writer.writeStringValue("msdyn_regardingentitydisplayname", this.msdyn_regardingentitydisplayname);
        writer.writeStringValue("msdyn_regardingentityname", this.msdyn_regardingentityname);
        writer.writeCollectionOfObjectValues<Msdyn_salestag>("msdyn_salestag_msdyn_sequence", this.msdyn_salestag_msdyn_sequence);
        writer.writeCollectionOfObjectValues<Msdyn_sequencetarget>("msdyn_sequence_appliedsequenceinstance", this.msdyn_sequence_appliedsequenceinstance);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sequence_AsyncOperations", this.msdyn_sequence_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sequence_BulkDeleteFailures", this.msdyn_sequence_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_sequence_connections1", this.msdyn_sequence_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_sequence_connections2", this.msdyn_sequence_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sequence_DuplicateBaseRecord", this.msdyn_sequence_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sequence_DuplicateMatchingRecord", this.msdyn_sequence_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sequence_MailboxTrackingFolders", this.msdyn_sequence_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_sequence>("msdyn_sequence_parentsequence", this.msdyn_sequence_parentsequence);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sequence_PrincipalObjectAttributeAccesses", this.msdyn_sequence_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sequence_ProcessSession", this.msdyn_sequence_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_sequencestat>("msdyn_sequence_sequencestat", this.msdyn_sequence_sequencestat);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sequence_SyncErrors", this.msdyn_sequence_SyncErrors);
        writer.writeStringValue("msdyn_sequenceexitcriterion", this.msdyn_sequenceexitcriterion);
        writer.writeStringValue("msdyn_sequenceid", this.msdyn_sequenceid);
        writer.writeCollectionOfObjectValues<Msdyn_sequencetarget>("msdyn_sequenceparent", this.msdyn_sequenceparent);
        writer.writeStringValue("msdyn_sequencerecords", this.msdyn_sequencerecords);
        writer.writeStringValue("msdyn_SequenceStats180d", this.msdyn_SequenceStats180d);
        writer.writeStringValue("msdyn_SequenceStats1y", this.msdyn_SequenceStats1y);
        writer.writeStringValue("msdyn_SequenceStats2y", this.msdyn_SequenceStats2y);
        writer.writeStringValue("msdyn_SequenceStats30d", this.msdyn_SequenceStats30d);
        writer.writeStringValue("msdyn_SequenceStats90d", this.msdyn_SequenceStats90d);
        writer.writeNumberValue("msdyn_totaltasks", this.msdyn_totaltasks);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeNumberValue("msdyn_version", this.msdyn_version);
        writer.writeStringValue("msdyn_versiondescription", this.msdyn_versiondescription);
        writer.writeStringValue("msdyn_workflowid", this.msdyn_workflowid);
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
