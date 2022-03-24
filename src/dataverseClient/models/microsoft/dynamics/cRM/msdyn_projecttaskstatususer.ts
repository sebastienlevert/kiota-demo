import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_projecttask, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projecttaskstatususer extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_projecttaskid_value?: string | undefined;
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
    private _msdyn_BookableResource?: Bookableresource | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_expectedcompletiondate?: Date | undefined;
    private _msdyn_expectedhourstocomplete?: number | undefined;
    private _msdyn_iscompleted?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_percentcomplete?: number | undefined;
    private _msdyn_projecttaskId?: Msdyn_projecttask | undefined;
    private _msdyn_projecttaskstatusindicator?: number | undefined;
    private _msdyn_projecttaskstatususer_Annotations?: Annotation[] | undefined;
    private _msdyn_projecttaskstatususer_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projecttaskstatususer_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projecttaskstatususer_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projecttaskstatususer_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projecttaskstatususer_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projecttaskstatususer_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projecttaskstatususer_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projecttaskstatususerid?: string | undefined;
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
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_projecttaskid_value property value. 
     * @returns a string
     */
    public get _msdyn_projecttaskid_value() {
        return this.__msdyn_projecttaskid_value;
    };
    /**
     * Sets the _msdyn_projecttaskid_value property value. 
     * @param value Value to set for the _msdyn_projecttaskid_value property.
     */
    public set _msdyn_projecttaskid_value(value: string | undefined) {
        this.__msdyn_projecttaskid_value = value;
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
     * Instantiates a new msdyn_projecttaskstatususer and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_projecttaskid_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._msdyn_projecttaskid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_BookableResource": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_BookableResource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_description = n.getStringValue(); },
            "msdyn_expectedcompletiondate": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_expectedcompletiondate = n.getDateValue(); },
            "msdyn_expectedhourstocomplete": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_expectedhourstocomplete = n.getNumberValue(); },
            "msdyn_iscompleted": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_iscompleted = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_name = n.getStringValue(); },
            "msdyn_percentcomplete": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_percentcomplete = n.getNumberValue(); },
            "msdyn_projecttaskId": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskId = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_projecttaskstatusindicator": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatusindicator = n.getNumberValue(); },
            "msdyn_projecttaskstatususer_Annotations": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_ProcessSession": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projecttaskstatususer_SyncErrors": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususer_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projecttaskstatususerid": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).msdyn_projecttaskstatususerid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projecttaskstatususer).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_BookableResource property value. 
     * @returns a bookableresource
     */
    public get msdyn_BookableResource() {
        return this._msdyn_BookableResource;
    };
    /**
     * Sets the msdyn_BookableResource property value. 
     * @param value Value to set for the msdyn_BookableResource property.
     */
    public set msdyn_BookableResource(value: Bookableresource | undefined) {
        this._msdyn_BookableResource = value;
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
     * Gets the msdyn_expectedcompletiondate property value. 
     * @returns a Date
     */
    public get msdyn_expectedcompletiondate() {
        return this._msdyn_expectedcompletiondate;
    };
    /**
     * Sets the msdyn_expectedcompletiondate property value. 
     * @param value Value to set for the msdyn_expectedcompletiondate property.
     */
    public set msdyn_expectedcompletiondate(value: Date | undefined) {
        this._msdyn_expectedcompletiondate = value;
    };
    /**
     * Gets the msdyn_expectedhourstocomplete property value. 
     * @returns a double
     */
    public get msdyn_expectedhourstocomplete() {
        return this._msdyn_expectedhourstocomplete;
    };
    /**
     * Sets the msdyn_expectedhourstocomplete property value. 
     * @param value Value to set for the msdyn_expectedhourstocomplete property.
     */
    public set msdyn_expectedhourstocomplete(value: number | undefined) {
        this._msdyn_expectedhourstocomplete = value;
    };
    /**
     * Gets the msdyn_iscompleted property value. 
     * @returns a boolean
     */
    public get msdyn_iscompleted() {
        return this._msdyn_iscompleted;
    };
    /**
     * Sets the msdyn_iscompleted property value. 
     * @param value Value to set for the msdyn_iscompleted property.
     */
    public set msdyn_iscompleted(value: boolean | undefined) {
        this._msdyn_iscompleted = value;
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
     * Gets the msdyn_percentcomplete property value. 
     * @returns a integer
     */
    public get msdyn_percentcomplete() {
        return this._msdyn_percentcomplete;
    };
    /**
     * Sets the msdyn_percentcomplete property value. 
     * @param value Value to set for the msdyn_percentcomplete property.
     */
    public set msdyn_percentcomplete(value: number | undefined) {
        this._msdyn_percentcomplete = value;
    };
    /**
     * Gets the msdyn_projecttaskId property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_projecttaskId() {
        return this._msdyn_projecttaskId;
    };
    /**
     * Sets the msdyn_projecttaskId property value. 
     * @param value Value to set for the msdyn_projecttaskId property.
     */
    public set msdyn_projecttaskId(value: Msdyn_projecttask | undefined) {
        this._msdyn_projecttaskId = value;
    };
    /**
     * Gets the msdyn_projecttaskstatusindicator property value. 
     * @returns a integer
     */
    public get msdyn_projecttaskstatusindicator() {
        return this._msdyn_projecttaskstatusindicator;
    };
    /**
     * Sets the msdyn_projecttaskstatusindicator property value. 
     * @param value Value to set for the msdyn_projecttaskstatusindicator property.
     */
    public set msdyn_projecttaskstatusindicator(value: number | undefined) {
        this._msdyn_projecttaskstatusindicator = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projecttaskstatususer_Annotations() {
        return this._msdyn_projecttaskstatususer_Annotations;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_Annotations property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_Annotations property.
     */
    public set msdyn_projecttaskstatususer_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projecttaskstatususer_Annotations = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projecttaskstatususer_AsyncOperations() {
        return this._msdyn_projecttaskstatususer_AsyncOperations;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_AsyncOperations property.
     */
    public set msdyn_projecttaskstatususer_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projecttaskstatususer_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projecttaskstatususer_BulkDeleteFailures() {
        return this._msdyn_projecttaskstatususer_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_BulkDeleteFailures property.
     */
    public set msdyn_projecttaskstatususer_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projecttaskstatususer_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projecttaskstatususer_DuplicateBaseRecord() {
        return this._msdyn_projecttaskstatususer_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_DuplicateBaseRecord property.
     */
    public set msdyn_projecttaskstatususer_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projecttaskstatususer_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projecttaskstatususer_DuplicateMatchingRecord() {
        return this._msdyn_projecttaskstatususer_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_DuplicateMatchingRecord property.
     */
    public set msdyn_projecttaskstatususer_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projecttaskstatususer_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projecttaskstatususer_MailboxTrackingFolders() {
        return this._msdyn_projecttaskstatususer_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_MailboxTrackingFolders property.
     */
    public set msdyn_projecttaskstatususer_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projecttaskstatususer_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projecttaskstatususer_ProcessSession() {
        return this._msdyn_projecttaskstatususer_ProcessSession;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_ProcessSession property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_ProcessSession property.
     */
    public set msdyn_projecttaskstatususer_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projecttaskstatususer_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususer_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projecttaskstatususer_SyncErrors() {
        return this._msdyn_projecttaskstatususer_SyncErrors;
    };
    /**
     * Sets the msdyn_projecttaskstatususer_SyncErrors property value. 
     * @param value Value to set for the msdyn_projecttaskstatususer_SyncErrors property.
     */
    public set msdyn_projecttaskstatususer_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projecttaskstatususer_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projecttaskstatususerid property value. 
     * @returns a string
     */
    public get msdyn_projecttaskstatususerid() {
        return this._msdyn_projecttaskstatususerid;
    };
    /**
     * Sets the msdyn_projecttaskstatususerid property value. 
     * @param value Value to set for the msdyn_projecttaskstatususerid property.
     */
    public set msdyn_projecttaskstatususerid(value: string | undefined) {
        this._msdyn_projecttaskstatususerid = value;
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
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_projecttaskid_value", this._msdyn_projecttaskid_value);
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
        writer.writeObjectValue<Bookableresource>("msdyn_BookableResource", this.msdyn_BookableResource);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_expectedcompletiondate", this.msdyn_expectedcompletiondate);
        writer.writeNumberValue("msdyn_expectedhourstocomplete", this.msdyn_expectedhourstocomplete);
        writer.writeBooleanValue("msdyn_iscompleted", this.msdyn_iscompleted);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_percentcomplete", this.msdyn_percentcomplete);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_projecttaskId", this.msdyn_projecttaskId);
        writer.writeNumberValue("msdyn_projecttaskstatusindicator", this.msdyn_projecttaskstatusindicator);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projecttaskstatususer_Annotations", this.msdyn_projecttaskstatususer_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projecttaskstatususer_AsyncOperations", this.msdyn_projecttaskstatususer_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projecttaskstatususer_BulkDeleteFailures", this.msdyn_projecttaskstatususer_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projecttaskstatususer_DuplicateBaseRecord", this.msdyn_projecttaskstatususer_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projecttaskstatususer_DuplicateMatchingRecord", this.msdyn_projecttaskstatususer_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projecttaskstatususer_MailboxTrackingFolders", this.msdyn_projecttaskstatususer_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses", this.msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projecttaskstatususer_ProcessSession", this.msdyn_projecttaskstatususer_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projecttaskstatususer_SyncErrors", this.msdyn_projecttaskstatususer_SyncErrors);
        writer.writeStringValue("msdyn_projecttaskstatususerid", this.msdyn_projecttaskstatususerid);
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
