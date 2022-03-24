import {createCanvasappFromDiscriminatorValue} from './createCanvasappFromDiscriminatorValue';
import {createFieldpermissionFromDiscriminatorValue} from './createFieldpermissionFromDiscriminatorValue';
import {createFieldsecurityprofileFromDiscriminatorValue} from './createFieldsecurityprofileFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createPrivilegeFromDiscriminatorValue} from './createPrivilegeFromDiscriminatorValue';
import {createPublisherFromDiscriminatorValue} from './createPublisherFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createSolutioncomponentFromDiscriminatorValue} from './createSolutioncomponentFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createWebresourceFromDiscriminatorValue} from './createWebresourceFromDiscriminatorValue';
import {Canvasapp, Crmbaseentity, Fieldpermission, Fieldsecurityprofile, Fileattachment, Organization, Package, Privilege, Publisher, Role, Solutioncomponent, Syncerror, Systemuser, Webresource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solution extends Crmbaseentity implements Parsable {
    private __configurationpageid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parentsolutionid_value?: string | undefined;
    private __publisherid_value?: string | undefined;
    private _configurationpageid?: Webresource | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _fileid?: Fileattachment | undefined;
    private _fK_CanvasApp_Solution?: Canvasapp[] | undefined;
    private _friendlyname?: string | undefined;
    private _installedon?: Date | undefined;
    private _isapimanaged?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvisible?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _package_solution?: Package[] | undefined;
    private _parentsolutionid?: Solution | undefined;
    private _pinpointassetid?: string | undefined;
    private _pinpointpublisherid?: number | undefined;
    private _pinpointsolutiondefaultlocale?: string | undefined;
    private _pinpointsolutionid?: number | undefined;
    private _publisherid?: Publisher | undefined;
    private _regardingobjectid_fileattachment_solution?: Fileattachment[] | undefined;
    private _solution_fieldpermission?: Fieldpermission[] | undefined;
    private _solution_fieldsecurityprofile?: Fieldsecurityprofile[] | undefined;
    private _solution_parent_solution?: Solution[] | undefined;
    private _solution_privilege?: Privilege[] | undefined;
    private _solution_role?: Role[] | undefined;
    private _solution_solutioncomponent?: Solutioncomponent[] | undefined;
    private _solution_SyncErrors?: Syncerror[] | undefined;
    private _solutionid?: string | undefined;
    private _solutionpackageversion?: string | undefined;
    private _solutiontype?: number | undefined;
    private _templatesuffix?: string | undefined;
    private _thumbprint?: string | undefined;
    private _uniquename?: string | undefined;
    private _updatedon?: Date | undefined;
    private _upgradeinfo?: string | undefined;
    private _version?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _configurationpageid_value property value. 
     * @returns a string
     */
    public get _configurationpageid_value() {
        return this.__configurationpageid_value;
    };
    /**
     * Sets the _configurationpageid_value property value. 
     * @param value Value to set for the _configurationpageid_value property.
     */
    public set _configurationpageid_value(value: string | undefined) {
        this.__configurationpageid_value = value;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _parentsolutionid_value property value. 
     * @returns a string
     */
    public get _parentsolutionid_value() {
        return this.__parentsolutionid_value;
    };
    /**
     * Sets the _parentsolutionid_value property value. 
     * @param value Value to set for the _parentsolutionid_value property.
     */
    public set _parentsolutionid_value(value: string | undefined) {
        this.__parentsolutionid_value = value;
    };
    /**
     * Gets the _publisherid_value property value. 
     * @returns a string
     */
    public get _publisherid_value() {
        return this.__publisherid_value;
    };
    /**
     * Sets the _publisherid_value property value. 
     * @param value Value to set for the _publisherid_value property.
     */
    public set _publisherid_value(value: string | undefined) {
        this.__publisherid_value = value;
    };
    /**
     * Gets the configurationpageid property value. 
     * @returns a webresource
     */
    public get configurationpageid() {
        return this._configurationpageid;
    };
    /**
     * Sets the configurationpageid property value. 
     * @param value Value to set for the configurationpageid property.
     */
    public set configurationpageid(value: Webresource | undefined) {
        this._configurationpageid = value;
    };
    /**
     * Instantiates a new solution and sets the default values.
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
     * Gets the fileid property value. 
     * @returns a fileattachment
     */
    public get fileid() {
        return this._fileid;
    };
    /**
     * Sets the fileid property value. 
     * @param value Value to set for the fileid property.
     */
    public set fileid(value: Fileattachment | undefined) {
        this._fileid = value;
    };
    /**
     * Gets the fK_CanvasApp_Solution property value. 
     * @returns a canvasapp
     */
    public get fK_CanvasApp_Solution() {
        return this._fK_CanvasApp_Solution;
    };
    /**
     * Sets the fK_CanvasApp_Solution property value. 
     * @param value Value to set for the FK_CanvasApp_Solution property.
     */
    public set fK_CanvasApp_Solution(value: Canvasapp[] | undefined) {
        this._fK_CanvasApp_Solution = value;
    };
    /**
     * Gets the friendlyname property value. 
     * @returns a string
     */
    public get friendlyname() {
        return this._friendlyname;
    };
    /**
     * Sets the friendlyname property value. 
     * @param value Value to set for the friendlyname property.
     */
    public set friendlyname(value: string | undefined) {
        this._friendlyname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_configurationpageid_value": (o, n) => { (o as unknown as Solution)._configurationpageid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Solution)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solution)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solution)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solution)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Solution)._organizationid_value = n.getStringValue(); },
            "_parentsolutionid_value": (o, n) => { (o as unknown as Solution)._parentsolutionid_value = n.getStringValue(); },
            "_publisherid_value": (o, n) => { (o as unknown as Solution)._publisherid_value = n.getStringValue(); },
            "configurationpageid": (o, n) => { (o as unknown as Solution).configurationpageid = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Solution).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Solution).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solution).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Solution).description = n.getStringValue(); },
            "fileid": (o, n) => { (o as unknown as Solution).fileid = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "fK_CanvasApp_Solution": (o, n) => { (o as unknown as Solution).fK_CanvasApp_Solution = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "friendlyname": (o, n) => { (o as unknown as Solution).friendlyname = n.getStringValue(); },
            "installedon": (o, n) => { (o as unknown as Solution).installedon = n.getDateValue(); },
            "isapimanaged": (o, n) => { (o as unknown as Solution).isapimanaged = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Solution).ismanaged = n.getBooleanValue(); },
            "isvisible": (o, n) => { (o as unknown as Solution).isvisible = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Solution).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Solution).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solution).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Solution).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "package_solution": (o, n) => { (o as unknown as Solution).package_solution = n.getCollectionOfObjectValues<Package>(createPackageFromDiscriminatorValue); },
            "parentsolutionid": (o, n) => { (o as unknown as Solution).parentsolutionid = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "pinpointassetid": (o, n) => { (o as unknown as Solution).pinpointassetid = n.getStringValue(); },
            "pinpointpublisherid": (o, n) => { (o as unknown as Solution).pinpointpublisherid = n.getNumberValue(); },
            "pinpointsolutiondefaultlocale": (o, n) => { (o as unknown as Solution).pinpointsolutiondefaultlocale = n.getStringValue(); },
            "pinpointsolutionid": (o, n) => { (o as unknown as Solution).pinpointsolutionid = n.getNumberValue(); },
            "publisherid": (o, n) => { (o as unknown as Solution).publisherid = n.getObjectValue<Publisher>(createPublisherFromDiscriminatorValue); },
            "regardingobjectid_fileattachment_solution": (o, n) => { (o as unknown as Solution).regardingobjectid_fileattachment_solution = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "solution_fieldpermission": (o, n) => { (o as unknown as Solution).solution_fieldpermission = n.getCollectionOfObjectValues<Fieldpermission>(createFieldpermissionFromDiscriminatorValue); },
            "solution_fieldsecurityprofile": (o, n) => { (o as unknown as Solution).solution_fieldsecurityprofile = n.getCollectionOfObjectValues<Fieldsecurityprofile>(createFieldsecurityprofileFromDiscriminatorValue); },
            "solution_parent_solution": (o, n) => { (o as unknown as Solution).solution_parent_solution = n.getCollectionOfObjectValues<Solution>(createSolutionFromDiscriminatorValue); },
            "solution_privilege": (o, n) => { (o as unknown as Solution).solution_privilege = n.getCollectionOfObjectValues<Privilege>(createPrivilegeFromDiscriminatorValue); },
            "solution_role": (o, n) => { (o as unknown as Solution).solution_role = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "solution_solutioncomponent": (o, n) => { (o as unknown as Solution).solution_solutioncomponent = n.getCollectionOfObjectValues<Solutioncomponent>(createSolutioncomponentFromDiscriminatorValue); },
            "solution_SyncErrors": (o, n) => { (o as unknown as Solution).solution_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Solution).solutionid = n.getStringValue(); },
            "solutionpackageversion": (o, n) => { (o as unknown as Solution).solutionpackageversion = n.getStringValue(); },
            "solutiontype": (o, n) => { (o as unknown as Solution).solutiontype = n.getNumberValue(); },
            "templatesuffix": (o, n) => { (o as unknown as Solution).templatesuffix = n.getStringValue(); },
            "thumbprint": (o, n) => { (o as unknown as Solution).thumbprint = n.getStringValue(); },
            "uniquename": (o, n) => { (o as unknown as Solution).uniquename = n.getStringValue(); },
            "updatedon": (o, n) => { (o as unknown as Solution).updatedon = n.getDateValue(); },
            "upgradeinfo": (o, n) => { (o as unknown as Solution).upgradeinfo = n.getStringValue(); },
            "version": (o, n) => { (o as unknown as Solution).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Solution).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the installedon property value. 
     * @returns a Date
     */
    public get installedon() {
        return this._installedon;
    };
    /**
     * Sets the installedon property value. 
     * @param value Value to set for the installedon property.
     */
    public set installedon(value: Date | undefined) {
        this._installedon = value;
    };
    /**
     * Gets the isapimanaged property value. 
     * @returns a boolean
     */
    public get isapimanaged() {
        return this._isapimanaged;
    };
    /**
     * Sets the isapimanaged property value. 
     * @param value Value to set for the isapimanaged property.
     */
    public set isapimanaged(value: boolean | undefined) {
        this._isapimanaged = value;
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
     * Gets the isvisible property value. 
     * @returns a boolean
     */
    public get isvisible() {
        return this._isvisible;
    };
    /**
     * Sets the isvisible property value. 
     * @param value Value to set for the isvisible property.
     */
    public set isvisible(value: boolean | undefined) {
        this._isvisible = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the package_solution property value. 
     * @returns a package
     */
    public get package_solution() {
        return this._package_solution;
    };
    /**
     * Sets the package_solution property value. 
     * @param value Value to set for the package_solution property.
     */
    public set package_solution(value: Package[] | undefined) {
        this._package_solution = value;
    };
    /**
     * Gets the parentsolutionid property value. 
     * @returns a solution
     */
    public get parentsolutionid() {
        return this._parentsolutionid;
    };
    /**
     * Sets the parentsolutionid property value. 
     * @param value Value to set for the parentsolutionid property.
     */
    public set parentsolutionid(value: Solution | undefined) {
        this._parentsolutionid = value;
    };
    /**
     * Gets the pinpointassetid property value. 
     * @returns a string
     */
    public get pinpointassetid() {
        return this._pinpointassetid;
    };
    /**
     * Sets the pinpointassetid property value. 
     * @param value Value to set for the pinpointassetid property.
     */
    public set pinpointassetid(value: string | undefined) {
        this._pinpointassetid = value;
    };
    /**
     * Gets the pinpointpublisherid property value. 
     * @returns a int64
     */
    public get pinpointpublisherid() {
        return this._pinpointpublisherid;
    };
    /**
     * Sets the pinpointpublisherid property value. 
     * @param value Value to set for the pinpointpublisherid property.
     */
    public set pinpointpublisherid(value: number | undefined) {
        this._pinpointpublisherid = value;
    };
    /**
     * Gets the pinpointsolutiondefaultlocale property value. 
     * @returns a string
     */
    public get pinpointsolutiondefaultlocale() {
        return this._pinpointsolutiondefaultlocale;
    };
    /**
     * Sets the pinpointsolutiondefaultlocale property value. 
     * @param value Value to set for the pinpointsolutiondefaultlocale property.
     */
    public set pinpointsolutiondefaultlocale(value: string | undefined) {
        this._pinpointsolutiondefaultlocale = value;
    };
    /**
     * Gets the pinpointsolutionid property value. 
     * @returns a int64
     */
    public get pinpointsolutionid() {
        return this._pinpointsolutionid;
    };
    /**
     * Sets the pinpointsolutionid property value. 
     * @param value Value to set for the pinpointsolutionid property.
     */
    public set pinpointsolutionid(value: number | undefined) {
        this._pinpointsolutionid = value;
    };
    /**
     * Gets the publisherid property value. 
     * @returns a publisher
     */
    public get publisherid() {
        return this._publisherid;
    };
    /**
     * Sets the publisherid property value. 
     * @param value Value to set for the publisherid property.
     */
    public set publisherid(value: Publisher | undefined) {
        this._publisherid = value;
    };
    /**
     * Gets the regardingobjectid_fileattachment_solution property value. 
     * @returns a fileattachment
     */
    public get regardingobjectid_fileattachment_solution() {
        return this._regardingobjectid_fileattachment_solution;
    };
    /**
     * Sets the regardingobjectid_fileattachment_solution property value. 
     * @param value Value to set for the regardingobjectid_fileattachment_solution property.
     */
    public set regardingobjectid_fileattachment_solution(value: Fileattachment[] | undefined) {
        this._regardingobjectid_fileattachment_solution = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_configurationpageid_value", this._configurationpageid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_parentsolutionid_value", this._parentsolutionid_value);
        writer.writeStringValue("_publisherid_value", this._publisherid_value);
        writer.writeObjectValue<Webresource>("configurationpageid", this.configurationpageid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<Fileattachment>("fileid", this.fileid);
        writer.writeCollectionOfObjectValues<Canvasapp>("fK_CanvasApp_Solution", this.fK_CanvasApp_Solution);
        writer.writeStringValue("friendlyname", this.friendlyname);
        writer.writeDateValue("installedon", this.installedon);
        writer.writeBooleanValue("isapimanaged", this.isapimanaged);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvisible", this.isvisible);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeCollectionOfObjectValues<Package>("package_solution", this.package_solution);
        writer.writeObjectValue<Solution>("parentsolutionid", this.parentsolutionid);
        writer.writeStringValue("pinpointassetid", this.pinpointassetid);
        writer.writeNumberValue("pinpointpublisherid", this.pinpointpublisherid);
        writer.writeStringValue("pinpointsolutiondefaultlocale", this.pinpointsolutiondefaultlocale);
        writer.writeNumberValue("pinpointsolutionid", this.pinpointsolutionid);
        writer.writeObjectValue<Publisher>("publisherid", this.publisherid);
        writer.writeCollectionOfObjectValues<Fileattachment>("regardingobjectid_fileattachment_solution", this.regardingobjectid_fileattachment_solution);
        writer.writeCollectionOfObjectValues<Fieldpermission>("solution_fieldpermission", this.solution_fieldpermission);
        writer.writeCollectionOfObjectValues<Fieldsecurityprofile>("solution_fieldsecurityprofile", this.solution_fieldsecurityprofile);
        writer.writeCollectionOfObjectValues<Solution>("solution_parent_solution", this.solution_parent_solution);
        writer.writeCollectionOfObjectValues<Privilege>("solution_privilege", this.solution_privilege);
        writer.writeCollectionOfObjectValues<Role>("solution_role", this.solution_role);
        writer.writeCollectionOfObjectValues<Solutioncomponent>("solution_solutioncomponent", this.solution_solutioncomponent);
        writer.writeCollectionOfObjectValues<Syncerror>("solution_SyncErrors", this.solution_SyncErrors);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("solutionpackageversion", this.solutionpackageversion);
        writer.writeNumberValue("solutiontype", this.solutiontype);
        writer.writeStringValue("templatesuffix", this.templatesuffix);
        writer.writeStringValue("thumbprint", this.thumbprint);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeDateValue("updatedon", this.updatedon);
        writer.writeStringValue("upgradeinfo", this.upgradeinfo);
        writer.writeStringValue("version", this.version);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_fieldpermission property value. 
     * @returns a fieldpermission
     */
    public get solution_fieldpermission() {
        return this._solution_fieldpermission;
    };
    /**
     * Sets the solution_fieldpermission property value. 
     * @param value Value to set for the solution_fieldpermission property.
     */
    public set solution_fieldpermission(value: Fieldpermission[] | undefined) {
        this._solution_fieldpermission = value;
    };
    /**
     * Gets the solution_fieldsecurityprofile property value. 
     * @returns a fieldsecurityprofile
     */
    public get solution_fieldsecurityprofile() {
        return this._solution_fieldsecurityprofile;
    };
    /**
     * Sets the solution_fieldsecurityprofile property value. 
     * @param value Value to set for the solution_fieldsecurityprofile property.
     */
    public set solution_fieldsecurityprofile(value: Fieldsecurityprofile[] | undefined) {
        this._solution_fieldsecurityprofile = value;
    };
    /**
     * Gets the solution_parent_solution property value. 
     * @returns a solution
     */
    public get solution_parent_solution() {
        return this._solution_parent_solution;
    };
    /**
     * Sets the solution_parent_solution property value. 
     * @param value Value to set for the solution_parent_solution property.
     */
    public set solution_parent_solution(value: Solution[] | undefined) {
        this._solution_parent_solution = value;
    };
    /**
     * Gets the solution_privilege property value. 
     * @returns a privilege
     */
    public get solution_privilege() {
        return this._solution_privilege;
    };
    /**
     * Sets the solution_privilege property value. 
     * @param value Value to set for the solution_privilege property.
     */
    public set solution_privilege(value: Privilege[] | undefined) {
        this._solution_privilege = value;
    };
    /**
     * Gets the solution_role property value. 
     * @returns a role
     */
    public get solution_role() {
        return this._solution_role;
    };
    /**
     * Sets the solution_role property value. 
     * @param value Value to set for the solution_role property.
     */
    public set solution_role(value: Role[] | undefined) {
        this._solution_role = value;
    };
    /**
     * Gets the solution_solutioncomponent property value. 
     * @returns a solutioncomponent
     */
    public get solution_solutioncomponent() {
        return this._solution_solutioncomponent;
    };
    /**
     * Sets the solution_solutioncomponent property value. 
     * @param value Value to set for the solution_solutioncomponent property.
     */
    public set solution_solutioncomponent(value: Solutioncomponent[] | undefined) {
        this._solution_solutioncomponent = value;
    };
    /**
     * Gets the solution_SyncErrors property value. 
     * @returns a syncerror
     */
    public get solution_SyncErrors() {
        return this._solution_SyncErrors;
    };
    /**
     * Sets the solution_SyncErrors property value. 
     * @param value Value to set for the Solution_SyncErrors property.
     */
    public set solution_SyncErrors(value: Syncerror[] | undefined) {
        this._solution_SyncErrors = value;
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
     * Gets the solutionpackageversion property value. 
     * @returns a string
     */
    public get solutionpackageversion() {
        return this._solutionpackageversion;
    };
    /**
     * Sets the solutionpackageversion property value. 
     * @param value Value to set for the solutionpackageversion property.
     */
    public set solutionpackageversion(value: string | undefined) {
        this._solutionpackageversion = value;
    };
    /**
     * Gets the solutiontype property value. 
     * @returns a integer
     */
    public get solutiontype() {
        return this._solutiontype;
    };
    /**
     * Sets the solutiontype property value. 
     * @param value Value to set for the solutiontype property.
     */
    public set solutiontype(value: number | undefined) {
        this._solutiontype = value;
    };
    /**
     * Gets the templatesuffix property value. 
     * @returns a string
     */
    public get templatesuffix() {
        return this._templatesuffix;
    };
    /**
     * Sets the templatesuffix property value. 
     * @param value Value to set for the templatesuffix property.
     */
    public set templatesuffix(value: string | undefined) {
        this._templatesuffix = value;
    };
    /**
     * Gets the thumbprint property value. 
     * @returns a string
     */
    public get thumbprint() {
        return this._thumbprint;
    };
    /**
     * Sets the thumbprint property value. 
     * @param value Value to set for the thumbprint property.
     */
    public set thumbprint(value: string | undefined) {
        this._thumbprint = value;
    };
    /**
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
    };
    /**
     * Gets the updatedon property value. 
     * @returns a Date
     */
    public get updatedon() {
        return this._updatedon;
    };
    /**
     * Sets the updatedon property value. 
     * @param value Value to set for the updatedon property.
     */
    public set updatedon(value: Date | undefined) {
        this._updatedon = value;
    };
    /**
     * Gets the upgradeinfo property value. 
     * @returns a string
     */
    public get upgradeinfo() {
        return this._upgradeinfo;
    };
    /**
     * Sets the upgradeinfo property value. 
     * @param value Value to set for the upgradeinfo property.
     */
    public set upgradeinfo(value: string | undefined) {
        this._upgradeinfo = value;
    };
    /**
     * Gets the version property value. 
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
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
