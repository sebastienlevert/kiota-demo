import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCharacteristicFromDiscriminatorValue} from './createCharacteristicFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_capacityprofileFromDiscriminatorValue} from './createMsdyn_capacityprofileFromDiscriminatorValue';
import {createMsdyn_decisionrulesetFromDiscriminatorValue} from './createMsdyn_decisionrulesetFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue} from './createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createRatingvalueFromDiscriminatorValue} from './createRatingvalueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Characteristic, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_capacityprofile, Msdyn_decisionruleset, Msdyn_liveworkstream, Msdyn_ocliveworkstreamcontextvariable, Principal, Principalobjectattributeaccess, Processsession, Queue, Ratingvalue, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rulesetdependencymapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_referencedpolymorphicentityid_value?: string | undefined;
    private __msdyn_referencingrulesetid_value?: string | undefined;
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
    private _msdyn_name?: string | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic?: Characteristic | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile?: Msdyn_capacityprofile | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset?: Msdyn_decisionruleset | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream?: Msdyn_liveworkstream | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable?: Msdyn_ocliveworkstreamcontextvariable | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue?: Queue | undefined;
    private _msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue?: Ratingvalue | undefined;
    private _msdyn_referencedpolymorphiclogicalname?: string | undefined;
    private _msdyn_referencingruleid?: string | undefined;
    private _msdyn_referencingrulename?: string | undefined;
    private _msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset?: Msdyn_decisionruleset | undefined;
    private _msdyn_rulesetdependencymapping_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rulesetdependencymapping_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rulesetdependencymapping_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rulesetdependencymapping_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rulesetdependencymapping_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rulesetdependencymapping_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rulesetdependencymapping_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rulesetdependencymappingid?: string | undefined;
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
     * Gets the _msdyn_referencedpolymorphicentityid_value property value. 
     * @returns a string
     */
    public get _msdyn_referencedpolymorphicentityid_value() {
        return this.__msdyn_referencedpolymorphicentityid_value;
    };
    /**
     * Sets the _msdyn_referencedpolymorphicentityid_value property value. 
     * @param value Value to set for the _msdyn_referencedpolymorphicentityid_value property.
     */
    public set _msdyn_referencedpolymorphicentityid_value(value: string | undefined) {
        this.__msdyn_referencedpolymorphicentityid_value = value;
    };
    /**
     * Gets the _msdyn_referencingrulesetid_value property value. 
     * @returns a string
     */
    public get _msdyn_referencingrulesetid_value() {
        return this.__msdyn_referencingrulesetid_value;
    };
    /**
     * Sets the _msdyn_referencingrulesetid_value property value. 
     * @param value Value to set for the _msdyn_referencingrulesetid_value property.
     */
    public set _msdyn_referencingrulesetid_value(value: string | undefined) {
        this.__msdyn_referencingrulesetid_value = value;
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
     * Instantiates a new msdyn_rulesetdependencymapping and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_referencedpolymorphicentityid_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._msdyn_referencedpolymorphicentityid_value = n.getStringValue(); },
            "_msdyn_referencingrulesetid_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._msdyn_referencingrulesetid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_name = n.getStringValue(); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic = n.getObjectValue<Characteristic>(createCharacteristicFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile = n.getObjectValue<Msdyn_capacityprofile>(createMsdyn_capacityprofileFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset = n.getObjectValue<Msdyn_decisionruleset>(createMsdyn_decisionrulesetFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable = n.getObjectValue<Msdyn_ocliveworkstreamcontextvariable>(createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue = n.getObjectValue<Ratingvalue>(createRatingvalueFromDiscriminatorValue); },
            "msdyn_referencedpolymorphiclogicalname": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencedpolymorphiclogicalname = n.getStringValue(); },
            "msdyn_referencingruleid": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencingruleid = n.getStringValue(); },
            "msdyn_referencingrulename": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencingrulename = n.getStringValue(); },
            "msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset = n.getObjectValue<Msdyn_decisionruleset>(createMsdyn_decisionrulesetFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_ProcessSession": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rulesetdependencymapping_SyncErrors": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymapping_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rulesetdependencymappingid": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).msdyn_rulesetdependencymappingid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rulesetdependencymapping).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic property value. 
     * @returns a characteristic
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic(value: Characteristic | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile property value. 
     * @returns a msdyn_capacityprofile
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile(value: Msdyn_capacityprofile | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property value. 
     * @returns a msdyn_decisionruleset
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset(value: Msdyn_decisionruleset | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable property value. 
     * @returns a msdyn_ocliveworkstreamcontextvariable
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable(value: Msdyn_ocliveworkstreamcontextvariable | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue property value. 
     * @returns a queue
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue(value: Queue | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue property value. 
     * @returns a ratingvalue
     */
    public get msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue() {
        return this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue;
    };
    /**
     * Sets the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue property value. 
     * @param value Value to set for the msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue property.
     */
    public set msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue(value: Ratingvalue | undefined) {
        this._msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue = value;
    };
    /**
     * Gets the msdyn_referencedpolymorphiclogicalname property value. 
     * @returns a string
     */
    public get msdyn_referencedpolymorphiclogicalname() {
        return this._msdyn_referencedpolymorphiclogicalname;
    };
    /**
     * Sets the msdyn_referencedpolymorphiclogicalname property value. 
     * @param value Value to set for the msdyn_referencedpolymorphiclogicalname property.
     */
    public set msdyn_referencedpolymorphiclogicalname(value: string | undefined) {
        this._msdyn_referencedpolymorphiclogicalname = value;
    };
    /**
     * Gets the msdyn_referencingruleid property value. 
     * @returns a string
     */
    public get msdyn_referencingruleid() {
        return this._msdyn_referencingruleid;
    };
    /**
     * Sets the msdyn_referencingruleid property value. 
     * @param value Value to set for the msdyn_referencingruleid property.
     */
    public set msdyn_referencingruleid(value: string | undefined) {
        this._msdyn_referencingruleid = value;
    };
    /**
     * Gets the msdyn_referencingrulename property value. 
     * @returns a string
     */
    public get msdyn_referencingrulename() {
        return this._msdyn_referencingrulename;
    };
    /**
     * Sets the msdyn_referencingrulename property value. 
     * @param value Value to set for the msdyn_referencingrulename property.
     */
    public set msdyn_referencingrulename(value: string | undefined) {
        this._msdyn_referencingrulename = value;
    };
    /**
     * Gets the msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property value. 
     * @returns a msdyn_decisionruleset
     */
    public get msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset() {
        return this._msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset;
    };
    /**
     * Sets the msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property value. 
     * @param value Value to set for the msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset property.
     */
    public set msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset(value: Msdyn_decisionruleset | undefined) {
        this._msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rulesetdependencymapping_AsyncOperations() {
        return this._msdyn_rulesetdependencymapping_AsyncOperations;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_AsyncOperations property.
     */
    public set msdyn_rulesetdependencymapping_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rulesetdependencymapping_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rulesetdependencymapping_BulkDeleteFailures() {
        return this._msdyn_rulesetdependencymapping_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_BulkDeleteFailures property.
     */
    public set msdyn_rulesetdependencymapping_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rulesetdependencymapping_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rulesetdependencymapping_DuplicateBaseRecord() {
        return this._msdyn_rulesetdependencymapping_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_DuplicateBaseRecord property.
     */
    public set msdyn_rulesetdependencymapping_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rulesetdependencymapping_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rulesetdependencymapping_DuplicateMatchingRecord() {
        return this._msdyn_rulesetdependencymapping_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_DuplicateMatchingRecord property.
     */
    public set msdyn_rulesetdependencymapping_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rulesetdependencymapping_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rulesetdependencymapping_MailboxTrackingFolders() {
        return this._msdyn_rulesetdependencymapping_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_MailboxTrackingFolders property.
     */
    public set msdyn_rulesetdependencymapping_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rulesetdependencymapping_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rulesetdependencymapping_ProcessSession() {
        return this._msdyn_rulesetdependencymapping_ProcessSession;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_ProcessSession property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_ProcessSession property.
     */
    public set msdyn_rulesetdependencymapping_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rulesetdependencymapping_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymapping_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rulesetdependencymapping_SyncErrors() {
        return this._msdyn_rulesetdependencymapping_SyncErrors;
    };
    /**
     * Sets the msdyn_rulesetdependencymapping_SyncErrors property value. 
     * @param value Value to set for the msdyn_rulesetdependencymapping_SyncErrors property.
     */
    public set msdyn_rulesetdependencymapping_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rulesetdependencymapping_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rulesetdependencymappingid property value. 
     * @returns a string
     */
    public get msdyn_rulesetdependencymappingid() {
        return this._msdyn_rulesetdependencymappingid;
    };
    /**
     * Sets the msdyn_rulesetdependencymappingid property value. 
     * @param value Value to set for the msdyn_rulesetdependencymappingid property.
     */
    public set msdyn_rulesetdependencymappingid(value: string | undefined) {
        this._msdyn_rulesetdependencymappingid = value;
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
        writer.writeStringValue("_msdyn_referencedpolymorphicentityid_value", this._msdyn_referencedpolymorphicentityid_value);
        writer.writeStringValue("_msdyn_referencingrulesetid_value", this._msdyn_referencingrulesetid_value);
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
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Characteristic>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic);
        writer.writeObjectValue<Msdyn_capacityprofile>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile);
        writer.writeObjectValue<Msdyn_decisionruleset>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream);
        writer.writeObjectValue<Msdyn_ocliveworkstreamcontextvariable>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable);
        writer.writeObjectValue<Queue>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue);
        writer.writeObjectValue<Ratingvalue>("msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue", this.msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue);
        writer.writeStringValue("msdyn_referencedpolymorphiclogicalname", this.msdyn_referencedpolymorphiclogicalname);
        writer.writeStringValue("msdyn_referencingruleid", this.msdyn_referencingruleid);
        writer.writeStringValue("msdyn_referencingrulename", this.msdyn_referencingrulename);
        writer.writeObjectValue<Msdyn_decisionruleset>("msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset", this.msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rulesetdependencymapping_AsyncOperations", this.msdyn_rulesetdependencymapping_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rulesetdependencymapping_BulkDeleteFailures", this.msdyn_rulesetdependencymapping_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rulesetdependencymapping_DuplicateBaseRecord", this.msdyn_rulesetdependencymapping_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rulesetdependencymapping_DuplicateMatchingRecord", this.msdyn_rulesetdependencymapping_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rulesetdependencymapping_MailboxTrackingFolders", this.msdyn_rulesetdependencymapping_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses", this.msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rulesetdependencymapping_ProcessSession", this.msdyn_rulesetdependencymapping_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rulesetdependencymapping_SyncErrors", this.msdyn_rulesetdependencymapping_SyncErrors);
        writer.writeStringValue("msdyn_rulesetdependencymappingid", this.msdyn_rulesetdependencymappingid);
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
