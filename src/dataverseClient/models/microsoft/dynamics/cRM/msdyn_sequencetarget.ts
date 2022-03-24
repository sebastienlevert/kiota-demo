import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_segmentFromDiscriminatorValue} from './createMsdyn_segmentFromDiscriminatorValue';
import {createMsdyn_sequenceFromDiscriminatorValue} from './createMsdyn_sequenceFromDiscriminatorValue';
import {createMsdyn_sequencetargetstepFromDiscriminatorValue} from './createMsdyn_sequencetargetstepFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Lead, Mailboxtrackingfolder, Msdyn_segment, Msdyn_sequence, Msdyn_sequencetargetstep, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sequencetarget extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_appliedsequenceinstance_value?: string | undefined;
    private __msdyn_parentsequence_value?: string | undefined;
    private __msdyn_segment_value?: string | undefined;
    private __msdyn_target_value?: string | undefined;
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
    private _msdyn_appliedsequenceinstance?: Msdyn_sequence | undefined;
    private _msdyn_currentstepcount?: number | undefined;
    private _msdyn_currentstepname?: string | undefined;
    private _msdyn_currentstepsubtype?: number | undefined;
    private _msdyn_currentsteptype?: number | undefined;
    private _msdyn_deactivatereason?: number | undefined;
    private _msdyn_msflowrunid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_parentsequence?: Msdyn_sequence | undefined;
    private _msdyn_parentsequenceversion?: number | undefined;
    private _msdyn_regarding?: string | undefined;
    private _msdyn_segment?: Msdyn_segment | undefined;
    private _msdyn_sequencetarget_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sequencetarget_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sequencetarget_connections1?: Connection[] | undefined;
    private _msdyn_sequencetarget_connections2?: Connection[] | undefined;
    private _msdyn_sequencetarget_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sequencetarget_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sequencetarget_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sequencetarget_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sequencetarget_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sequencetarget_sequencetargetstep?: Msdyn_sequencetargetstep[] | undefined;
    private _msdyn_sequencetarget_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sequencetargetid?: string | undefined;
    private _msdyn_sequencetargetuniquekey?: string | undefined;
    private _msdyn_target?: Lead | undefined;
    private _msdyn_totalstepcount?: number | undefined;
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
     * Gets the _msdyn_appliedsequenceinstance_value property value. 
     * @returns a string
     */
    public get _msdyn_appliedsequenceinstance_value() {
        return this.__msdyn_appliedsequenceinstance_value;
    };
    /**
     * Sets the _msdyn_appliedsequenceinstance_value property value. 
     * @param value Value to set for the _msdyn_appliedsequenceinstance_value property.
     */
    public set _msdyn_appliedsequenceinstance_value(value: string | undefined) {
        this.__msdyn_appliedsequenceinstance_value = value;
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
     * Gets the _msdyn_segment_value property value. 
     * @returns a string
     */
    public get _msdyn_segment_value() {
        return this.__msdyn_segment_value;
    };
    /**
     * Sets the _msdyn_segment_value property value. 
     * @param value Value to set for the _msdyn_segment_value property.
     */
    public set _msdyn_segment_value(value: string | undefined) {
        this.__msdyn_segment_value = value;
    };
    /**
     * Gets the _msdyn_target_value property value. 
     * @returns a string
     */
    public get _msdyn_target_value() {
        return this.__msdyn_target_value;
    };
    /**
     * Sets the _msdyn_target_value property value. 
     * @param value Value to set for the _msdyn_target_value property.
     */
    public set _msdyn_target_value(value: string | undefined) {
        this.__msdyn_target_value = value;
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
     * Instantiates a new msdyn_sequencetarget and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_appliedsequenceinstance_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._msdyn_appliedsequenceinstance_value = n.getStringValue(); },
            "_msdyn_parentsequence_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._msdyn_parentsequence_value = n.getStringValue(); },
            "_msdyn_segment_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._msdyn_segment_value = n.getStringValue(); },
            "_msdyn_target_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._msdyn_target_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sequencetarget)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sequencetarget).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sequencetarget).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sequencetarget).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sequencetarget).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sequencetarget).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sequencetarget).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sequencetarget).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appliedsequenceinstance": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_appliedsequenceinstance = n.getObjectValue<Msdyn_sequence>(createMsdyn_sequenceFromDiscriminatorValue); },
            "msdyn_currentstepcount": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_currentstepcount = n.getNumberValue(); },
            "msdyn_currentstepname": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_currentstepname = n.getStringValue(); },
            "msdyn_currentstepsubtype": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_currentstepsubtype = n.getNumberValue(); },
            "msdyn_currentsteptype": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_currentsteptype = n.getNumberValue(); },
            "msdyn_deactivatereason": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_deactivatereason = n.getNumberValue(); },
            "msdyn_msflowrunid": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_msflowrunid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_name = n.getStringValue(); },
            "msdyn_parentsequence": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_parentsequence = n.getObjectValue<Msdyn_sequence>(createMsdyn_sequenceFromDiscriminatorValue); },
            "msdyn_parentsequenceversion": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_parentsequenceversion = n.getNumberValue(); },
            "msdyn_regarding": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_regarding = n.getStringValue(); },
            "msdyn_segment": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_segment = n.getObjectValue<Msdyn_segment>(createMsdyn_segmentFromDiscriminatorValue); },
            "msdyn_sequencetarget_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sequencetarget_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sequencetarget_connections1": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_sequencetarget_connections2": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_sequencetarget_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sequencetarget_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sequencetarget_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sequencetarget_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sequencetarget_ProcessSession": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sequencetarget_sequencetargetstep": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_sequencetargetstep = n.getCollectionOfObjectValues<Msdyn_sequencetargetstep>(createMsdyn_sequencetargetstepFromDiscriminatorValue); },
            "msdyn_sequencetarget_SyncErrors": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetarget_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sequencetargetid": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetargetid = n.getStringValue(); },
            "msdyn_sequencetargetuniquekey": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_sequencetargetuniquekey = n.getStringValue(); },
            "msdyn_target": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_target = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "msdyn_totalstepcount": (o, n) => { (o as unknown as Msdyn_sequencetarget).msdyn_totalstepcount = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sequencetarget).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sequencetarget).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sequencetarget).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sequencetarget).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sequencetarget).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sequencetarget).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sequencetarget).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sequencetarget).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sequencetarget).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sequencetarget).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_appliedsequenceinstance property value. 
     * @returns a msdyn_sequence
     */
    public get msdyn_appliedsequenceinstance() {
        return this._msdyn_appliedsequenceinstance;
    };
    /**
     * Sets the msdyn_appliedsequenceinstance property value. 
     * @param value Value to set for the msdyn_appliedsequenceinstance property.
     */
    public set msdyn_appliedsequenceinstance(value: Msdyn_sequence | undefined) {
        this._msdyn_appliedsequenceinstance = value;
    };
    /**
     * Gets the msdyn_currentstepcount property value. 
     * @returns a integer
     */
    public get msdyn_currentstepcount() {
        return this._msdyn_currentstepcount;
    };
    /**
     * Sets the msdyn_currentstepcount property value. 
     * @param value Value to set for the msdyn_currentstepcount property.
     */
    public set msdyn_currentstepcount(value: number | undefined) {
        this._msdyn_currentstepcount = value;
    };
    /**
     * Gets the msdyn_currentstepname property value. 
     * @returns a string
     */
    public get msdyn_currentstepname() {
        return this._msdyn_currentstepname;
    };
    /**
     * Sets the msdyn_currentstepname property value. 
     * @param value Value to set for the msdyn_currentstepname property.
     */
    public set msdyn_currentstepname(value: string | undefined) {
        this._msdyn_currentstepname = value;
    };
    /**
     * Gets the msdyn_currentstepsubtype property value. 
     * @returns a integer
     */
    public get msdyn_currentstepsubtype() {
        return this._msdyn_currentstepsubtype;
    };
    /**
     * Sets the msdyn_currentstepsubtype property value. 
     * @param value Value to set for the msdyn_currentstepsubtype property.
     */
    public set msdyn_currentstepsubtype(value: number | undefined) {
        this._msdyn_currentstepsubtype = value;
    };
    /**
     * Gets the msdyn_currentsteptype property value. 
     * @returns a integer
     */
    public get msdyn_currentsteptype() {
        return this._msdyn_currentsteptype;
    };
    /**
     * Sets the msdyn_currentsteptype property value. 
     * @param value Value to set for the msdyn_currentsteptype property.
     */
    public set msdyn_currentsteptype(value: number | undefined) {
        this._msdyn_currentsteptype = value;
    };
    /**
     * Gets the msdyn_deactivatereason property value. 
     * @returns a integer
     */
    public get msdyn_deactivatereason() {
        return this._msdyn_deactivatereason;
    };
    /**
     * Sets the msdyn_deactivatereason property value. 
     * @param value Value to set for the msdyn_deactivatereason property.
     */
    public set msdyn_deactivatereason(value: number | undefined) {
        this._msdyn_deactivatereason = value;
    };
    /**
     * Gets the msdyn_msflowrunid property value. 
     * @returns a string
     */
    public get msdyn_msflowrunid() {
        return this._msdyn_msflowrunid;
    };
    /**
     * Sets the msdyn_msflowrunid property value. 
     * @param value Value to set for the msdyn_msflowrunid property.
     */
    public set msdyn_msflowrunid(value: string | undefined) {
        this._msdyn_msflowrunid = value;
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
     * Gets the msdyn_parentsequence property value. 
     * @returns a msdyn_sequence
     */
    public get msdyn_parentsequence() {
        return this._msdyn_parentsequence;
    };
    /**
     * Sets the msdyn_parentsequence property value. 
     * @param value Value to set for the msdyn_parentsequence property.
     */
    public set msdyn_parentsequence(value: Msdyn_sequence | undefined) {
        this._msdyn_parentsequence = value;
    };
    /**
     * Gets the msdyn_parentsequenceversion property value. 
     * @returns a integer
     */
    public get msdyn_parentsequenceversion() {
        return this._msdyn_parentsequenceversion;
    };
    /**
     * Sets the msdyn_parentsequenceversion property value. 
     * @param value Value to set for the msdyn_parentsequenceversion property.
     */
    public set msdyn_parentsequenceversion(value: number | undefined) {
        this._msdyn_parentsequenceversion = value;
    };
    /**
     * Gets the msdyn_regarding property value. 
     * @returns a string
     */
    public get msdyn_regarding() {
        return this._msdyn_regarding;
    };
    /**
     * Sets the msdyn_regarding property value. 
     * @param value Value to set for the msdyn_regarding property.
     */
    public set msdyn_regarding(value: string | undefined) {
        this._msdyn_regarding = value;
    };
    /**
     * Gets the msdyn_segment property value. 
     * @returns a msdyn_segment
     */
    public get msdyn_segment() {
        return this._msdyn_segment;
    };
    /**
     * Sets the msdyn_segment property value. 
     * @param value Value to set for the msdyn_segment property.
     */
    public set msdyn_segment(value: Msdyn_segment | undefined) {
        this._msdyn_segment = value;
    };
    /**
     * Gets the msdyn_sequencetarget_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sequencetarget_AsyncOperations() {
        return this._msdyn_sequencetarget_AsyncOperations;
    };
    /**
     * Sets the msdyn_sequencetarget_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sequencetarget_AsyncOperations property.
     */
    public set msdyn_sequencetarget_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sequencetarget_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sequencetarget_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sequencetarget_BulkDeleteFailures() {
        return this._msdyn_sequencetarget_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sequencetarget_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sequencetarget_BulkDeleteFailures property.
     */
    public set msdyn_sequencetarget_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sequencetarget_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sequencetarget_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_sequencetarget_connections1() {
        return this._msdyn_sequencetarget_connections1;
    };
    /**
     * Sets the msdyn_sequencetarget_connections1 property value. 
     * @param value Value to set for the msdyn_sequencetarget_connections1 property.
     */
    public set msdyn_sequencetarget_connections1(value: Connection[] | undefined) {
        this._msdyn_sequencetarget_connections1 = value;
    };
    /**
     * Gets the msdyn_sequencetarget_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_sequencetarget_connections2() {
        return this._msdyn_sequencetarget_connections2;
    };
    /**
     * Sets the msdyn_sequencetarget_connections2 property value. 
     * @param value Value to set for the msdyn_sequencetarget_connections2 property.
     */
    public set msdyn_sequencetarget_connections2(value: Connection[] | undefined) {
        this._msdyn_sequencetarget_connections2 = value;
    };
    /**
     * Gets the msdyn_sequencetarget_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sequencetarget_DuplicateBaseRecord() {
        return this._msdyn_sequencetarget_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sequencetarget_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sequencetarget_DuplicateBaseRecord property.
     */
    public set msdyn_sequencetarget_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sequencetarget_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sequencetarget_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sequencetarget_DuplicateMatchingRecord() {
        return this._msdyn_sequencetarget_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sequencetarget_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sequencetarget_DuplicateMatchingRecord property.
     */
    public set msdyn_sequencetarget_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sequencetarget_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sequencetarget_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sequencetarget_MailboxTrackingFolders() {
        return this._msdyn_sequencetarget_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sequencetarget_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sequencetarget_MailboxTrackingFolders property.
     */
    public set msdyn_sequencetarget_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sequencetarget_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sequencetarget_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sequencetarget_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sequencetarget_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sequencetarget_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sequencetarget_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sequencetarget_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sequencetarget_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sequencetarget_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sequencetarget_ProcessSession() {
        return this._msdyn_sequencetarget_ProcessSession;
    };
    /**
     * Sets the msdyn_sequencetarget_ProcessSession property value. 
     * @param value Value to set for the msdyn_sequencetarget_ProcessSession property.
     */
    public set msdyn_sequencetarget_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sequencetarget_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sequencetarget_sequencetargetstep property value. 
     * @returns a msdyn_sequencetargetstep
     */
    public get msdyn_sequencetarget_sequencetargetstep() {
        return this._msdyn_sequencetarget_sequencetargetstep;
    };
    /**
     * Sets the msdyn_sequencetarget_sequencetargetstep property value. 
     * @param value Value to set for the msdyn_sequencetarget_sequencetargetstep property.
     */
    public set msdyn_sequencetarget_sequencetargetstep(value: Msdyn_sequencetargetstep[] | undefined) {
        this._msdyn_sequencetarget_sequencetargetstep = value;
    };
    /**
     * Gets the msdyn_sequencetarget_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sequencetarget_SyncErrors() {
        return this._msdyn_sequencetarget_SyncErrors;
    };
    /**
     * Sets the msdyn_sequencetarget_SyncErrors property value. 
     * @param value Value to set for the msdyn_sequencetarget_SyncErrors property.
     */
    public set msdyn_sequencetarget_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sequencetarget_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sequencetargetid property value. 
     * @returns a string
     */
    public get msdyn_sequencetargetid() {
        return this._msdyn_sequencetargetid;
    };
    /**
     * Sets the msdyn_sequencetargetid property value. 
     * @param value Value to set for the msdyn_sequencetargetid property.
     */
    public set msdyn_sequencetargetid(value: string | undefined) {
        this._msdyn_sequencetargetid = value;
    };
    /**
     * Gets the msdyn_sequencetargetuniquekey property value. 
     * @returns a string
     */
    public get msdyn_sequencetargetuniquekey() {
        return this._msdyn_sequencetargetuniquekey;
    };
    /**
     * Sets the msdyn_sequencetargetuniquekey property value. 
     * @param value Value to set for the msdyn_sequencetargetuniquekey property.
     */
    public set msdyn_sequencetargetuniquekey(value: string | undefined) {
        this._msdyn_sequencetargetuniquekey = value;
    };
    /**
     * Gets the msdyn_target property value. 
     * @returns a lead
     */
    public get msdyn_target() {
        return this._msdyn_target;
    };
    /**
     * Sets the msdyn_target property value. 
     * @param value Value to set for the msdyn_target property.
     */
    public set msdyn_target(value: Lead | undefined) {
        this._msdyn_target = value;
    };
    /**
     * Gets the msdyn_totalstepcount property value. 
     * @returns a integer
     */
    public get msdyn_totalstepcount() {
        return this._msdyn_totalstepcount;
    };
    /**
     * Sets the msdyn_totalstepcount property value. 
     * @param value Value to set for the msdyn_totalstepcount property.
     */
    public set msdyn_totalstepcount(value: number | undefined) {
        this._msdyn_totalstepcount = value;
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
        writer.writeStringValue("_msdyn_appliedsequenceinstance_value", this._msdyn_appliedsequenceinstance_value);
        writer.writeStringValue("_msdyn_parentsequence_value", this._msdyn_parentsequence_value);
        writer.writeStringValue("_msdyn_segment_value", this._msdyn_segment_value);
        writer.writeStringValue("_msdyn_target_value", this._msdyn_target_value);
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
        writer.writeObjectValue<Msdyn_sequence>("msdyn_appliedsequenceinstance", this.msdyn_appliedsequenceinstance);
        writer.writeNumberValue("msdyn_currentstepcount", this.msdyn_currentstepcount);
        writer.writeStringValue("msdyn_currentstepname", this.msdyn_currentstepname);
        writer.writeNumberValue("msdyn_currentstepsubtype", this.msdyn_currentstepsubtype);
        writer.writeNumberValue("msdyn_currentsteptype", this.msdyn_currentsteptype);
        writer.writeNumberValue("msdyn_deactivatereason", this.msdyn_deactivatereason);
        writer.writeStringValue("msdyn_msflowrunid", this.msdyn_msflowrunid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_sequence>("msdyn_parentsequence", this.msdyn_parentsequence);
        writer.writeNumberValue("msdyn_parentsequenceversion", this.msdyn_parentsequenceversion);
        writer.writeStringValue("msdyn_regarding", this.msdyn_regarding);
        writer.writeObjectValue<Msdyn_segment>("msdyn_segment", this.msdyn_segment);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sequencetarget_AsyncOperations", this.msdyn_sequencetarget_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sequencetarget_BulkDeleteFailures", this.msdyn_sequencetarget_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_sequencetarget_connections1", this.msdyn_sequencetarget_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_sequencetarget_connections2", this.msdyn_sequencetarget_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sequencetarget_DuplicateBaseRecord", this.msdyn_sequencetarget_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sequencetarget_DuplicateMatchingRecord", this.msdyn_sequencetarget_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sequencetarget_MailboxTrackingFolders", this.msdyn_sequencetarget_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sequencetarget_PrincipalObjectAttributeAccesses", this.msdyn_sequencetarget_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sequencetarget_ProcessSession", this.msdyn_sequencetarget_ProcessSession);
        writer.writeCollectionOfObjectValues<Msdyn_sequencetargetstep>("msdyn_sequencetarget_sequencetargetstep", this.msdyn_sequencetarget_sequencetargetstep);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sequencetarget_SyncErrors", this.msdyn_sequencetarget_SyncErrors);
        writer.writeStringValue("msdyn_sequencetargetid", this.msdyn_sequencetargetid);
        writer.writeStringValue("msdyn_sequencetargetuniquekey", this.msdyn_sequencetargetuniquekey);
        writer.writeObjectValue<Lead>("msdyn_target", this.msdyn_target);
        writer.writeNumberValue("msdyn_totalstepcount", this.msdyn_totalstepcount);
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
