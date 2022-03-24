import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSharepointsiteFromDiscriminatorValue} from './createSharepointsiteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Businessunit, Crmbaseentity, Duplicaterecord, Principal, Principalobjectattributeaccess, Processsession, Sharepointdocumentlocation, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sharepointsite extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentsite_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _absoluteurl?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _folderstructureentity?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isdefault?: boolean | undefined;
    private _isgridpresent?: boolean | undefined;
    private _ispowerbisite?: boolean | undefined;
    private _lastvalidated?: Date | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentsite?: Sharepointsite | undefined;
    private _relativeurl?: string | undefined;
    private _servicetype?: number | undefined;
    private _sharepointdocumentlocation_parent_sharepointsite?: Sharepointdocumentlocation[] | undefined;
    private _sharePointSite_AsyncOperations?: Asyncoperation[] | undefined;
    private _sharePointSite_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _sharePointSite_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _sharepointsite_parentsite_sharepointsite?: Sharepointsite[] | undefined;
    private _sharepointsite_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _sharePointSite_ProcessSessions?: Processsession[] | undefined;
    private _sharePointSite_SyncErrors?: Syncerror[] | undefined;
    private _sharepointsiteid?: string | undefined;
    private _sitecollectionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _userid?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _validationstatus?: number | undefined;
    private _validationstatuserrorcode?: number | undefined;
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
     * Gets the _parentsite_value property value. 
     * @returns a string
     */
    public get _parentsite_value() {
        return this.__parentsite_value;
    };
    /**
     * Sets the _parentsite_value property value. 
     * @param value Value to set for the _parentsite_value property.
     */
    public set _parentsite_value(value: string | undefined) {
        this.__parentsite_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the absoluteurl property value. 
     * @returns a string
     */
    public get absoluteurl() {
        return this._absoluteurl;
    };
    /**
     * Sets the absoluteurl property value. 
     * @param value Value to set for the absoluteurl property.
     */
    public set absoluteurl(value: string | undefined) {
        this._absoluteurl = value;
    };
    /**
     * Instantiates a new sharepointsite and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the folderstructureentity property value. 
     * @returns a string
     */
    public get folderstructureentity() {
        return this._folderstructureentity;
    };
    /**
     * Sets the folderstructureentity property value. 
     * @param value Value to set for the folderstructureentity property.
     */
    public set folderstructureentity(value: string | undefined) {
        this._folderstructureentity = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sharepointsite)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sharepointsite)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sharepointsite)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sharepointsite)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Sharepointsite)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Sharepointsite)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Sharepointsite)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Sharepointsite)._owninguser_value = n.getStringValue(); },
            "_parentsite_value": (o, n) => { (o as unknown as Sharepointsite)._parentsite_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Sharepointsite)._transactioncurrencyid_value = n.getStringValue(); },
            "absoluteurl": (o, n) => { (o as unknown as Sharepointsite).absoluteurl = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Sharepointsite).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sharepointsite).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sharepointsite).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Sharepointsite).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Sharepointsite).exchangerate = n.getNumberValue(); },
            "folderstructureentity": (o, n) => { (o as unknown as Sharepointsite).folderstructureentity = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Sharepointsite).importsequencenumber = n.getNumberValue(); },
            "isdefault": (o, n) => { (o as unknown as Sharepointsite).isdefault = n.getBooleanValue(); },
            "isgridpresent": (o, n) => { (o as unknown as Sharepointsite).isgridpresent = n.getBooleanValue(); },
            "ispowerbisite": (o, n) => { (o as unknown as Sharepointsite).ispowerbisite = n.getBooleanValue(); },
            "lastvalidated": (o, n) => { (o as unknown as Sharepointsite).lastvalidated = n.getDateValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sharepointsite).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sharepointsite).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sharepointsite).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sharepointsite).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Sharepointsite).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Sharepointsite).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Sharepointsite).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Sharepointsite).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Sharepointsite).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentsite": (o, n) => { (o as unknown as Sharepointsite).parentsite = n.getObjectValue<Sharepointsite>(createSharepointsiteFromDiscriminatorValue); },
            "relativeurl": (o, n) => { (o as unknown as Sharepointsite).relativeurl = n.getStringValue(); },
            "servicetype": (o, n) => { (o as unknown as Sharepointsite).servicetype = n.getNumberValue(); },
            "sharepointdocumentlocation_parent_sharepointsite": (o, n) => { (o as unknown as Sharepointsite).sharepointdocumentlocation_parent_sharepointsite = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "sharePointSite_AsyncOperations": (o, n) => { (o as unknown as Sharepointsite).sharePointSite_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "sharePointSite_DuplicateBaseRecord": (o, n) => { (o as unknown as Sharepointsite).sharePointSite_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "sharePointSite_DuplicateMatchingRecord": (o, n) => { (o as unknown as Sharepointsite).sharePointSite_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "sharepointsite_parentsite_sharepointsite": (o, n) => { (o as unknown as Sharepointsite).sharepointsite_parentsite_sharepointsite = n.getCollectionOfObjectValues<Sharepointsite>(createSharepointsiteFromDiscriminatorValue); },
            "sharepointsite_principalobjectattributeaccess": (o, n) => { (o as unknown as Sharepointsite).sharepointsite_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "sharePointSite_ProcessSessions": (o, n) => { (o as unknown as Sharepointsite).sharePointSite_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "sharePointSite_SyncErrors": (o, n) => { (o as unknown as Sharepointsite).sharePointSite_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "sharepointsiteid": (o, n) => { (o as unknown as Sharepointsite).sharepointsiteid = n.getStringValue(); },
            "sitecollectionid": (o, n) => { (o as unknown as Sharepointsite).sitecollectionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Sharepointsite).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Sharepointsite).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Sharepointsite).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Sharepointsite).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userid": (o, n) => { (o as unknown as Sharepointsite).userid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Sharepointsite).utcconversiontimezonecode = n.getNumberValue(); },
            "validationstatus": (o, n) => { (o as unknown as Sharepointsite).validationstatus = n.getNumberValue(); },
            "validationstatuserrorcode": (o, n) => { (o as unknown as Sharepointsite).validationstatuserrorcode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sharepointsite).versionnumber = n.getNumberValue(); },
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
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
    };
    /**
     * Gets the isgridpresent property value. 
     * @returns a boolean
     */
    public get isgridpresent() {
        return this._isgridpresent;
    };
    /**
     * Sets the isgridpresent property value. 
     * @param value Value to set for the isgridpresent property.
     */
    public set isgridpresent(value: boolean | undefined) {
        this._isgridpresent = value;
    };
    /**
     * Gets the ispowerbisite property value. 
     * @returns a boolean
     */
    public get ispowerbisite() {
        return this._ispowerbisite;
    };
    /**
     * Sets the ispowerbisite property value. 
     * @param value Value to set for the ispowerbisite property.
     */
    public set ispowerbisite(value: boolean | undefined) {
        this._ispowerbisite = value;
    };
    /**
     * Gets the lastvalidated property value. 
     * @returns a Date
     */
    public get lastvalidated() {
        return this._lastvalidated;
    };
    /**
     * Sets the lastvalidated property value. 
     * @param value Value to set for the lastvalidated property.
     */
    public set lastvalidated(value: Date | undefined) {
        this._lastvalidated = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the parentsite property value. 
     * @returns a sharepointsite
     */
    public get parentsite() {
        return this._parentsite;
    };
    /**
     * Sets the parentsite property value. 
     * @param value Value to set for the parentsite property.
     */
    public set parentsite(value: Sharepointsite | undefined) {
        this._parentsite = value;
    };
    /**
     * Gets the relativeurl property value. 
     * @returns a string
     */
    public get relativeurl() {
        return this._relativeurl;
    };
    /**
     * Sets the relativeurl property value. 
     * @param value Value to set for the relativeurl property.
     */
    public set relativeurl(value: string | undefined) {
        this._relativeurl = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentsite_value", this._parentsite_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("absoluteurl", this.absoluteurl);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("folderstructureentity", this.folderstructureentity);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("isgridpresent", this.isgridpresent);
        writer.writeBooleanValue("ispowerbisite", this.ispowerbisite);
        writer.writeDateValue("lastvalidated", this.lastvalidated);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Sharepointsite>("parentsite", this.parentsite);
        writer.writeStringValue("relativeurl", this.relativeurl);
        writer.writeNumberValue("servicetype", this.servicetype);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("sharepointdocumentlocation_parent_sharepointsite", this.sharepointdocumentlocation_parent_sharepointsite);
        writer.writeCollectionOfObjectValues<Asyncoperation>("sharePointSite_AsyncOperations", this.sharePointSite_AsyncOperations);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("sharePointSite_DuplicateBaseRecord", this.sharePointSite_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("sharePointSite_DuplicateMatchingRecord", this.sharePointSite_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Sharepointsite>("sharepointsite_parentsite_sharepointsite", this.sharepointsite_parentsite_sharepointsite);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("sharepointsite_principalobjectattributeaccess", this.sharepointsite_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("sharePointSite_ProcessSessions", this.sharePointSite_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("sharePointSite_SyncErrors", this.sharePointSite_SyncErrors);
        writer.writeStringValue("sharepointsiteid", this.sharepointsiteid);
        writer.writeStringValue("sitecollectionid", this.sitecollectionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("userid", this.userid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("validationstatus", this.validationstatus);
        writer.writeNumberValue("validationstatuserrorcode", this.validationstatuserrorcode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the servicetype property value. 
     * @returns a integer
     */
    public get servicetype() {
        return this._servicetype;
    };
    /**
     * Sets the servicetype property value. 
     * @param value Value to set for the servicetype property.
     */
    public set servicetype(value: number | undefined) {
        this._servicetype = value;
    };
    /**
     * Gets the sharepointdocumentlocation_parent_sharepointsite property value. 
     * @returns a sharepointdocumentlocation
     */
    public get sharepointdocumentlocation_parent_sharepointsite() {
        return this._sharepointdocumentlocation_parent_sharepointsite;
    };
    /**
     * Sets the sharepointdocumentlocation_parent_sharepointsite property value. 
     * @param value Value to set for the sharepointdocumentlocation_parent_sharepointsite property.
     */
    public set sharepointdocumentlocation_parent_sharepointsite(value: Sharepointdocumentlocation[] | undefined) {
        this._sharepointdocumentlocation_parent_sharepointsite = value;
    };
    /**
     * Gets the sharePointSite_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get sharePointSite_AsyncOperations() {
        return this._sharePointSite_AsyncOperations;
    };
    /**
     * Sets the sharePointSite_AsyncOperations property value. 
     * @param value Value to set for the SharePointSite_AsyncOperations property.
     */
    public set sharePointSite_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._sharePointSite_AsyncOperations = value;
    };
    /**
     * Gets the sharePointSite_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get sharePointSite_DuplicateBaseRecord() {
        return this._sharePointSite_DuplicateBaseRecord;
    };
    /**
     * Sets the sharePointSite_DuplicateBaseRecord property value. 
     * @param value Value to set for the SharePointSite_DuplicateBaseRecord property.
     */
    public set sharePointSite_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._sharePointSite_DuplicateBaseRecord = value;
    };
    /**
     * Gets the sharePointSite_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get sharePointSite_DuplicateMatchingRecord() {
        return this._sharePointSite_DuplicateMatchingRecord;
    };
    /**
     * Sets the sharePointSite_DuplicateMatchingRecord property value. 
     * @param value Value to set for the SharePointSite_DuplicateMatchingRecord property.
     */
    public set sharePointSite_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._sharePointSite_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the sharepointsite_parentsite_sharepointsite property value. 
     * @returns a sharepointsite
     */
    public get sharepointsite_parentsite_sharepointsite() {
        return this._sharepointsite_parentsite_sharepointsite;
    };
    /**
     * Sets the sharepointsite_parentsite_sharepointsite property value. 
     * @param value Value to set for the sharepointsite_parentsite_sharepointsite property.
     */
    public set sharepointsite_parentsite_sharepointsite(value: Sharepointsite[] | undefined) {
        this._sharepointsite_parentsite_sharepointsite = value;
    };
    /**
     * Gets the sharepointsite_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get sharepointsite_principalobjectattributeaccess() {
        return this._sharepointsite_principalobjectattributeaccess;
    };
    /**
     * Sets the sharepointsite_principalobjectattributeaccess property value. 
     * @param value Value to set for the sharepointsite_principalobjectattributeaccess property.
     */
    public set sharepointsite_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._sharepointsite_principalobjectattributeaccess = value;
    };
    /**
     * Gets the sharePointSite_ProcessSessions property value. 
     * @returns a processsession
     */
    public get sharePointSite_ProcessSessions() {
        return this._sharePointSite_ProcessSessions;
    };
    /**
     * Sets the sharePointSite_ProcessSessions property value. 
     * @param value Value to set for the SharePointSite_ProcessSessions property.
     */
    public set sharePointSite_ProcessSessions(value: Processsession[] | undefined) {
        this._sharePointSite_ProcessSessions = value;
    };
    /**
     * Gets the sharePointSite_SyncErrors property value. 
     * @returns a syncerror
     */
    public get sharePointSite_SyncErrors() {
        return this._sharePointSite_SyncErrors;
    };
    /**
     * Sets the sharePointSite_SyncErrors property value. 
     * @param value Value to set for the SharePointSite_SyncErrors property.
     */
    public set sharePointSite_SyncErrors(value: Syncerror[] | undefined) {
        this._sharePointSite_SyncErrors = value;
    };
    /**
     * Gets the sharepointsiteid property value. 
     * @returns a string
     */
    public get sharepointsiteid() {
        return this._sharepointsiteid;
    };
    /**
     * Sets the sharepointsiteid property value. 
     * @param value Value to set for the sharepointsiteid property.
     */
    public set sharepointsiteid(value: string | undefined) {
        this._sharepointsiteid = value;
    };
    /**
     * Gets the sitecollectionid property value. 
     * @returns a string
     */
    public get sitecollectionid() {
        return this._sitecollectionid;
    };
    /**
     * Sets the sitecollectionid property value. 
     * @param value Value to set for the sitecollectionid property.
     */
    public set sitecollectionid(value: string | undefined) {
        this._sitecollectionid = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the userid property value. 
     * @returns a string
     */
    public get userid() {
        return this._userid;
    };
    /**
     * Sets the userid property value. 
     * @param value Value to set for the userid property.
     */
    public set userid(value: string | undefined) {
        this._userid = value;
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
     * Gets the validationstatus property value. 
     * @returns a integer
     */
    public get validationstatus() {
        return this._validationstatus;
    };
    /**
     * Sets the validationstatus property value. 
     * @param value Value to set for the validationstatus property.
     */
    public set validationstatus(value: number | undefined) {
        this._validationstatus = value;
    };
    /**
     * Gets the validationstatuserrorcode property value. 
     * @returns a integer
     */
    public get validationstatuserrorcode() {
        return this._validationstatuserrorcode;
    };
    /**
     * Sets the validationstatuserrorcode property value. 
     * @param value Value to set for the validationstatuserrorcode property.
     */
    public set validationstatuserrorcode(value: number | undefined) {
        this._validationstatuserrorcode = value;
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
